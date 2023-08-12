import React, { useState } from "react"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"

const EmbedComponent = (props) => {
    const [loadExternal, setLoadExternal] = useState(false)
    const handleLoadExternal = () => { setLoadExternal(true) }

    if (loadExternal === true) {
        
        if (props.source.toLowerCase() === "youtube") {
            const linky = "https://www.youtube-nocookie.com/embed/" + props.id
            return (
                <iframe class="yt-embed" src={linky} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            )
        } else {
            return (
                <> {props.embed} </>
            )
        }

    } else {
        
        return (
            <Container className="small text-center py-3 bg-dark text-white">
                <p>This content is hosted by a third-party ({props.source}). By loading the content you are consenting to their <a href={props.terms} target="_blank" rel="noopener noreferrer">terms and conditions</a>, including their use of Cookies.</p>
                <Button variant="warning" className="mt-1 mb-4" onClick={handleLoadExternal}>Show me the content.</Button>
                <p>Alternatively, click <a href={props.directLink} target="_blank" rel="noopener noreferrer">here</a> to access the content via their website.</p>
            </Container>
        )

    }
}

export default EmbedComponent