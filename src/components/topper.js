import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'

const TopperComponent = () => {
    const data = useStaticQuery
        (graphql`query {
        site {
        siteMetadata {
            title,
            description
                }
            }
        }
    `)

    return (
            <Container className="topper">
                <h1 className="pzntrk float-end from-top">{data.site.siteMetadata.title}</h1>
            </Container>
    )
}

export default TopperComponent