import React from 'react'
// import BrandingScene from '../components/scene'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import "../components/pretty.css"

const BrandingScene = React.lazy(() => import("../components/scene"))

const BrandingComponent = () => {
    const width = React.useRef(window.innerWidth)
    if (width.current >= 768) {
        return (
            <section>
                <Container fluid className="text-center">
                    <Row className="scene">
                        <React.Suspense fallback={<></>}>
                            <BrandingScene />
                        </React.Suspense>
                    </Row>
                </Container>
            </section>
        )
    } else {
        return (
            <></>
        )
    }
}

export default BrandingComponent