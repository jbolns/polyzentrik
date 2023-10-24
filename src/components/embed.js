import React, { useState } from 'react'
import { Helmet } from "react-helmet"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import OembedComponent from './oembed'

const EmbedComponent = (props) => {
    const [loadExternal, setLoadExternal] = useState(false)
    const handleLoadExternal = () => { setLoadExternal(true) }

    if (loadExternal === true) {
        if (props.type.toLowerCase() === "oembed") {
            return (
                <div className={"embedio " + props.provider.toLowerCase()}>
                    <OembedComponent
                        provider={props.provider}
                        link={props.link} >
                    </OembedComponent>
                </div>
            )
        } else if (props.type.toLowerCase() === "id") {
            if (props.provider.toLowerCase() === "twitch") {
                const parent = "www.polyzentrik.com" // Change this for the name of website hosting the embed.
                const linky = "https://player.twitch.tv/?" + props.id + "&parent=" + parent
                return (
                    <div className="embedio twitch">
                        <iframe
                            title="tw"
                            src={linky}
                            height="100%"
                            width="100%"
                            frameborder="0"
                            allowfullscreen="true"
                            scrolling="no">
                        </iframe>
                    </div>
                )
            } else if (props.provider.toLowerCase() === "linkedin") {
                const linky = "https://www.linkedin.com/embed/feed/update/urn:li:share:" + props.id
                return (
                    <div className="embedio linkedin">
                        <iframe
                            src={linky}
                            frameborder="0"
                            allowfullscreen=""
                            title="ld">
                        </iframe>
                    </div>
                )
            } else if (props.provider.toLowerCase() === "gmaps") {
                const linky = "https://www.google.com/maps/embed?pb=" + props.id
                return (
                    <div className="embedio linkedin">
                        <iframe
                            src={linky}
                            frameborder="0"
                            allowfullscreen=""
                            loading="lazy"
                            title="gm"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                )
            } 

        } else if (props.type.toLowerCase() === "code") {
            const code = props.code
            const script = props.script
            return (
                <>
                    <div className="embedio">
                        <div dangerouslySetInnerHTML={{ __html: code }} />
                        <Helmet>
                            <script src={script}
                                type="text/javascript"
                                defer async />
                        </Helmet>
                    </div>
                </>
            )
        } else {
            console.log("You must specify an embed type. Available types: 'oembed', 'id', 'code'.")
        }
    } else {
        return (
            <Container className="small text-center py-3 bg-dark text-white">
                <p>This content is hosted by a third-party ({props.provider}). By loading the content you are consenting to their <a href={props.terms} target="_blank" rel="noopener noreferrer">terms and conditions</a>, including their use of Cookies.</p>
                <Button variant="warning" className="mt-1 mb-4" onClick={handleLoadExternal}>Show me the content.</Button>
                <p>Alternatively, click <a href={props.link} target="_blank" rel="noopener noreferrer">here</a> to access the content via their website.</p>
            </Container>
        )

    }
}

export default EmbedComponent