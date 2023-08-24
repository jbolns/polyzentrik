import React, { useState, useEffect } from 'react'
import { Helmet } from "react-helmet"
import axios from 'axios'
import providers from '../utils/oembed-providers.json'
import '../components/pretty.css'

const OembedComponent = (props) => {
    var [data, setData] = useState()

    let endpoint = providers.filter(
        function (item) {
            return item.provider_name === props.provider
        }
    )

    var oembedLink = endpoint[0].endpoints[0].url + "?url=" + props.link + "&format=json"
    oembedLink = oembedLink.replace(".{format}", ".json")

    useEffect(() => {
        axios.get(oembedLink).then(response => { setData(response.data.html) })
    }, [oembedLink])

    if (props.provider.toLowerCase() === "tiktok") {
        var dict = { tiktok: "https://www.tiktok.com/embed.js" }
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: data }} />
                <Helmet>
                    <script src={dict[props.provider.toLowerCase()]} 
                    type="text/javascript" 
                    async />
                </Helmet>
            </>
        )
    } else {
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: data }} />
            </>
        )
    }
}

export default OembedComponent