import React from "react"
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ServicesComponent from '../components/services'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../components/pretty.css"
import MissionComponent from "../components/mission"

const HomePage = ({ data }) => {
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.type === "blog")

  return (
    <Layout pageTitle="Welcome">
      <Container fluid className="horizontal-section shadow">
        <Row className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2" >
          <Col lg={3} className="d-flex">
            <Container>
              <h3 className="pzntrk" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">Latest from our blog</h3>
              <p className="word-breakie" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">We regularly publish fairly decent content about data, AI, and digital sustain&shy;ability.</p>
              <Link to={`/blog/`}>
                <Button className="less" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">Go to blog</Button>
              </Link>
            </Container>
          </Col>
          <Col lg={9}>
            <Container>
              <Row className="d-flex">
                {
                  posts.map(node => (
                    <Col md={4} className="px-0 my-md-auto">
                      <article key={node.id}>
                        <Card data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
                          <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                            <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="Placeholder image" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease" />
                          </Link>
                          <Card.Body data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">
                            <Card.Title data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">
                              <h4 className="small"><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                            </Card.Title>
                            <Card.Text data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">
                              <p>{node.excerpt}</p>
                              <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                                <Button className="more float-end" data-sal="zoom-out" data-sal-delay="200" data-sal-easing="ease">Read full post</Button>
                              </Link>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </article>
                    </Col>
                  ))
                }
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <span className="word-breakie">
        <MissionComponent />
      </span>

      <ServicesComponent />
    </Layout >
  )
}

export const query = graphql`
query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "blog"}}}
    limit: 3) 
    {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        type
        slug
        categories
        author
        hero_image {
          childImageSharp {
            gatsbyImageData  (
              layout: FULL_WIDTH
              )
          }
        }
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => (
  <Seo title="Polyzentrik > Home"
    description="Websites, data, and (applied) AI solutions. We aim to help individuals and SMEs access and use digital technologies." />
)

export default HomePage