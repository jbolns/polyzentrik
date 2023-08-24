import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ServicesComponent = () => {
    const data = useStaticQuery(graphql`query {
                allMdx(
                        sort: {frontmatter: {rank: DESC}}
                        filter: {frontmatter: {type: {eq: "services"}}}) 
                        {
                                nodes {
                                        id
                                        frontmatter {
                                                title
                                                type
                                                slug
                                                rank
                                                intro
                                                hero_image {
                                                        childImageSharp {
                                                                gatsbyImageData  (
                                                                        layout: FULL_WIDTH
                                                                )
                                                        }
                                                }
                                        }
                                }
                        }
                }
        `)

    const posts = data.allMdx.nodes

    return (
        <Container fluid className="horizontal-section shadow">
            <Row>
                <Col className="col-lg-8 offset-lg-2">
                    <Container className="d-md-flex">
                        <Col className="mb-5 col-12 col-md-3">
                            <Container data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
                                <h3 className="pzntrk">Services</h3>
                                <p className="word-breakie">We offer services for different needs and budgets. We can also tailor solutions to your specific needs.</p>
                                <Link to={`/services/`}>
                                    <Button className="less float-en">Go to services</Button>
                                </Link>
                            </Container>
                        </Col>
                        <Col className="col-12 col-md-9">
                            <Container className="m-md-5 d-md-flex flex-wrap">
                                    {
                                        posts.map(node => (
                                            <Col className="col-12 col-md-4 offset-md-0 col-xl-3" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                                                <Card variant="top" className="h-100">
                                                    <article key={node.id}>
                                                        <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                                                            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease" />
                                                        </Link>
                                                        <Card.Body>
                                                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                                                <h4 className="small">
                                                                    <Link to={`/services/${node.frontmatter.slug}`}>
                                                                        {node.frontmatter.title}
                                                                    </Link></h4>
                                                            </Card.Title>
                                                            <Card.Text>
                                                                <p>{node.frontmatter.intro}</p>
                                                                <Link to={`/services/${node.frontmatter.slug}`}>
                                                                    <Button className="more float-end" >
                                                                        Check service
                                                                    </Button>
                                                                </Link>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </article>
                                                </Card>
                                            </Col>
                                        ))
                                    }
                                
                            </Container>
                        </Col>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}


export default ServicesComponent