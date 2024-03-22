import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ServicesComponent = () => {
  const data = useStaticQuery(graphql
    `query {
      allMdx(
        sort: {frontmatter: {rank: ASC}}
        filter: {frontmatter: {type: {eq: "services"}}}
        limit: 3) 
        {
          nodes {
            id
            frontmatter {
              title
              type
              slug
              rank
              categories
              intro
                hero_image {
                  childImageSharp {
                    gatsbyImageData ( layout: FULL_WIDTH )
                  }
                }
            }
          }
        }
      }
    `)

  const posts = data.allMdx.nodes

  return (
    <Container fluid className='horizontal-section shadow bg-highlight'>
      <Row className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-xl-flex'>
        <Col lg={3}>
          <Container>
            <h3 className='pzntrk'>Top services</h3>
            <p>We cannot do everything at once, but we can help you with pretty much anything digital.</p>
            <p>We consider resource-utilisation across the entire chain, which helps build solutions that are cost-efficient and keep society and the environment in mind.</p>
            <Link to={`/services/`}>
              <Button className='less float-end'>See all services</Button>
            </Link>
            </Container>
        </Col>
        <Col lg={9}>
          <Container>
            <Row>
            {
              posts.map(node => (
                <Col key={node.id} md={4} className='px-0 my-md-auto'>
                  <Card data-sal='slide-up' data-sal-delay='300' data-sal-easing='ease'>
                  <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                        <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt='Placeholder image' data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease' />
                      </Link>
                      <Card.Body data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>
                        <Card.Title data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>
                        <h4><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                      </Card.Title>
                      <Card.Text>
                        <Link to={`/services/${node.frontmatter.categories}`}>
                          <span className='cats highlight'>
                            {node.frontmatter.categories.replace('-', ' ')}
                          </span>
                        </Link>
                        <span className='clearer excerpt'>{node.frontmatter.intro}</span>
                        <span className='clearer'></span>
                        <Link to={`/services/${node.frontmatter.slug}`}>
                          <Button className='more float-end' data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>
                            Check service
                          </Button>
                        </Link>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}


export default ServicesComponent