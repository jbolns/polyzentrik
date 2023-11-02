import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
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
        limit: 6) 
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
      <Row>
        <Col className='col-lg-8 offset-lg-2'>
          <Container className='d-md-flex'>
            <Col className='mb-5 col-12 col-md-4'>
              <Container data-sal='slide-up' data-sal-delay='200' data-sal-easing='ease'>
                <h3 className='pzntrk'>Top services</h3>
                <p>We cannot do everything at once, but we can help you with pretty much anything digital.</p>
                <p>We consider resource-utilisation across the entire chain, which helps build solutions that perform, are cost-efficient, and keep society and the environment in mind.</p>
                <Link to={`/services/`}>
                  <Button className='less float-en'>See all services</Button>
                </Link>
              </Container>
            </Col>
            <Col className='col-12 col-md-9'>
              <Container className='d-md-flex flex-wrap'>
                {
                  posts.map(node => (
                    <Col key={node.id} className='col-12 col-md-6 offset-md-0 col-xl-4' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                      <Card variant='top' className='h-100'>
                        <Card.Body>
                          <Card.Title data-sal='zoom-out' data-sal-delay='400' data-sal-easing='ease'>
                            <h4 className='small'>
                              <Link to={`/services/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link></h4>
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
                              <Button className='more float-end'>
                                Check service
                              </Button>
                            </Link>
                          </Card.Text>
                        </Card.Body>
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