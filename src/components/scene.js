import React from "react"
//import * as THREE from "three"
import { Vector2, Raycaster, Scene, FogExp2, PerspectiveCamera, WebGLRenderer, Vector3, 
    HemisphereLight, PointLight, IcosahedronGeometry, TextureLoader, BufferGeometry, Line, 
    LineDashedMaterial, Mesh, MeshLambertMaterial, Float32BufferAttribute } from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import texture from '../images/graphics/pat-gray.png'

// IF ALL GOES WELL THIS SCENE SHOULD END UP WITH A NETWORK OF INTERCONNECTED NODES THAT:
// - Rotate on their own
// - Allows additional model rotation via pointer
// - Allows node scaling via hover
// - Allows node color change via click


// GLOBAL STUFF I HAVE NO IDEA WHERE ELSE TO PUT
var pointer = new Vector2()
const raycaster = new Raycaster();

class BrandingScene extends React.Component {
    componentDidMount() {

        // SET THE SCENE, & CAMERA, & RENDERER
        const scene = new Scene()
        scene.fog = new FogExp2(0xffffff, 0.07)

        const camera = new PerspectiveCamera(75, this.mount.offsetWidth / this.mount.offsetHeight, 0.1, 1000)
        this.camera = camera
        camera.position.z = 7

        const renderer = new WebGLRenderer({ alpha: true })
        this.renderer = renderer
        renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true

        this.mount.appendChild(renderer.domElement)

        // SET CONTROLS
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target = new Vector3(0, 0, 0);
        controls.update();

        // ADD LIGHTING 
        const ambient = new HemisphereLight(0xffffff, 0xbfd4d2, 0.9);
        scene.add(ambient);

        const light1 = new PointLight(0xddffdd, 1.0);
        light1.position.z = 0;
        light1.position.y = 0;
        light1.position.x = 0;

        const light2 = new PointLight(0xffdddd, 1.0);
        light2.position.z = 10;
        light2.position.x = - 7;
        light2.position.y = 0;

        const light3 = new PointLight(0xddddff, 1.0);
        light3.position.z = 7;
        light3.position.x = -7;
        light3.position.y = -5;

        scene.add(light1, light2, light3);

        // DECLARE CONSTRAINTS TO BE USED TO CREATE NODES AND EDGES
        const nodeSize = 0.7
        const nodes = 7
        const r = 7

        var positions = []
        var colors = []
        var auxPositions = []
        var auxColors = []


        // DEFINE THE BASIC GEOMETRIES AND MATERIALS
        var nodeGeo = new IcosahedronGeometry(nodeSize, 5)
        const wrapper = new TextureLoader().load(texture)

        const lineGeo = new BufferGeometry();
        const lineMaterial = new LineDashedMaterial({ dashSize: 0.1, gapSize: 0.09, vertexColors: true })
        
        const auxLineGeo = new BufferGeometry(); // No need for material for this one as it will use same as primary line


        // NOW POSITION STUFF ACROSS THE SCENE

        var bool = false // This variable will help to ensure nodes do not overlap
        var c = 0 // This variable will help to create an auxiliary line connecting only some nodes
        
        for (let i = 0; i < nodes; i++) {

            // Randomly generate positions, but keep generating until new positions do not overlap with existing nodes
            while (bool === false) {
                bool = true // Assume there will be no overlap and set boolean flag to true to exit loop
                var x = Math.random() * r - r / 2
                var y = Math.random() * r - r / 2
                var z = Math.random() * r - r / 2

                // If there is overlap with an existing node set boolean flag to false to repeat loop
                if (positions.length > 0) {
                    for (let j = 0; j < positions.length; j = j + 3) {
                        var dx = x - positions[(j)]
                        var dy = y - positions[(j + 1)]
                        var dz = z - positions[(j + 2)]
                        var distance = Math.hypot(dx, dy, dz)
                        if (distance / 2 < nodeSize) {
                            bool = false
                        }
                    }
                }
                // At this point, if overlaps exist boolean flag will be false and the loop will repeat, otherwise it will be true and program will exit loop
            }
            bool = false // Set boolean flag back to false to reset loop settings for next position

            // Place a node on the newly generated position, with a material of its own (to allow individual changes later on)
            const nodeMaterial = new MeshLambertMaterial({ map: wrapper, wireframe: true, depthWrite: true, depthTest: true }) 
            var object = new Mesh(nodeGeo, nodeMaterial)
            object.position.set(x, y, z)

            object.castShadow = true;
            object.receiveShadow = true;

            scene.add(object);

            // Push the node's position to an array to use later when generating edges
            positions.push(x, y, z)

            // Generate colors for edges and push them to an array for later usage
            const c1 = colors.push((Math.random()))
            const c2 = colors.push((Math.random()))
            const c3 = colors.push((Math.random()))
            colors.push(c1, c2, c3)

            // Create an array with a subset of positions, to create additional edges between nodes
            if (c % 3 === 0) {
                auxPositions.push(x, y, z)
                auxColors.push(c1, c2, c3)
            }
            c = c + 1 // This counter does something important, but I forgot
        }

        // CONNECT NODES USING THE ARRAYS FROM THE LOOP TO CREATE EDGES

        // Primary line connects nodes in the order created: 1 -> 2 -> ... -> n
        lineGeo.setAttribute('position', new Float32BufferAttribute(positions, 3))
        lineGeo.setAttribute('color', new Float32BufferAttribute(colors, 3))
        let line = new Line(lineGeo, lineMaterial)
        line.computeLineDistances()
       
        // Auxiliary line will add edges between every two nodes (or maybe three - it's been a while)
        auxLineGeo.setAttribute('position', new Float32BufferAttribute(auxPositions, 3))
        auxLineGeo.setAttribute('color', new Float32BufferAttribute(auxColors, 3))
        let auxLine = new Line(auxLineGeo, lineMaterial)
        auxLine.computeLineDistances()

        // Add both lines to the scene
        scene.add(line, auxLine);


        // BRING SCENE TO LIFE
        this.animate = function () {
            requestAnimationFrame(this.animate.bind(this))

            scene.rotation.x += 0.003
            scene.rotation.y += 0.003
            scene.rotation.z += 0.003

            renderer.render(scene, camera)
        }
        this.animate()

        // FUNCTION TO CHANGE NODE COLORS UPON CLICKING A NODE
        this.clickSituation = function () {
            
            // Reset colors of all nodes before changing new node
            //this.resetSituation()

            // ID node pointer is at 
            raycaster.setFromCamera(pointer, camera) 
            const intersects = raycaster.intersectObjects(scene.children)

            // Change node color
            if (intersects.length >= 1) {
                for (let i = 0; i < intersects.length; i++) {
                    intersects[i].object.material.color.set(Math.random() * 0xffffff)
                    intersects[i].object.material.opacity = 0.3
                }
            }
        }

        // FUNCTION TO RESET COLORS OF NODES BEFORE CHANGING COLOR OF A NEW NODE
        //this.resetSituation = function () {
        //    for (let i = 0; i < scene.children.length; i++) {
        //        if (scene.children[i].material) {
        //            scene.children[i].material.color.set("aliceblue");
        //        }
        //    }
        //}

        // FUNCTION TO SCALE UP ANY NODE BEING HOVERED
        this.hoverSituation = function () {
            
            // Reset scale of all nodes first
            for (let i = 0; i < scene.children.length; i++) {
                if (scene.children[i].material) {
                    scene.children[i].scale.set(1, 1, 1);
                }
            }

            // ID node pointer is at 
            raycaster.setFromCamera(pointer, camera)
            const intersects = raycaster.intersectObjects(scene.children)

            // Scale node
            if (intersects.length >= 1) {
                for (let i = 0; i < intersects.length; i++) {
                    if (intersects[i].object.type === "Mesh") {
                        intersects[i].object.scale.set(1.3, 1.3, 1.3)
                    }
                }
            }
        }

        // ADD A BUNCH OF LISTENERS
        document.addEventListener('pointermove', this.onPointerMove.bind(this), false)
        document.addEventListener('pointerdown', this.onPointerDown.bind(this), false)
        window.addEventListener('resize', this.onWindowResize.bind(this), false)

    }

    // FUNCTION GET POINTER COORDINATES AS IT MOVES AND CALL HOVER FUNCTIONS
    onPointerMove(event) {
        this.hoverSituation()
        if (this.mount) {
            pointer.x = (event.clientX / this.mount.offsetWidth) * 2 - 1
            pointer.y = - (event.clientY / this.mount.offsetHeight) * 2 + 1
            return pointer
        }
    }

    // FUNCTION TO GET POINTER COORDINATES UPON CLICK AND CALL CLICK FUNCTIONS
    onPointerDown(event) {

        //this.resetSituation()
        this.clickSituation()

        if (this.mount) {
            pointer.x = (event.clientX / this.mount.offsetWidth) * 2 - 1
            pointer.y = - (event.clientY / this.mount.offsetHeight) * 2 + 1
            return pointer
        }
    }

    // FUNCTION TO HANDLE RESIZES
    onWindowResize() {
        if (this.mount) {
            this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
            this.camera.updateProjectionMatrix()
            this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
        }
    }
    
    // FINALLLY (!), RENDER
    render() {
        return (
            <div
                ref={ref => (this.mount = ref)}
                style={{ width: "100%", height: "60vh", margin: "auto"}}>
            </div>
            
        )
    }
}

export default BrandingScene