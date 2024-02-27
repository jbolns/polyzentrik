import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import StatusTip from './statustip'

const ProductsComponent = () => {
  const data = useStaticQuery(graphql
    `query {
      allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {type: {eq: "products"}}}
        limit: 3) 
        {
          nodes {
            id
            frontmatter {
              title
              slug
              intro
              categories
              license
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
          <Container className='d-xl-flex'>
            <Col className='mb-5 col-12 col-xl-4'>
              <Container data-sal='slide-up' data-sal-delay='200' data-sal-easing='ease'>
                <h3 className='pzntrk'>Products</h3>
                <p>Digital tools that keep society and the environment in mind.</p>
                <Link to={`/products/`}>
                  <Button className='less float-end'>See all products</Button>
                </Link>
                <span className='clearer'></span>
              </Container>
            </Col>
            <Col className='col-12 col-xl-8'>
              <Container className='d-md-flex flex-wrap'>
                {
                  posts.map(node => (
                    <Col key={node.id} className='col-12 offset-md-1' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                      <Card variant='top' className='h-100'>
                        <Card.Body>
                          <Card.Title data-sal='zoom-out' data-sal-delay='400' data-sal-easing='ease'>
                            <h4>
                              <Link to={`/products/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link></h4>
                          </Card.Title>
                          <Card.Text>
                            <Link to={`/products/${node.frontmatter.categories}`}>
                              <span className='cats highlight'>
                                {node.frontmatter.categories.replace('-', ' ')}
                              </span>
                            </Link>
                            <span className='clearer excerpt'>{node.frontmatter.intro}</span>
                            <span className='additional'>
                              <span className='status'>License:&nbsp;</span>
                              <span className={node.frontmatter.license}>
                                {node.frontmatter.license}
                              </span>.
                            </span>
                            <span className='clearer'></span>
                            <Link to={`/products/${node.frontmatter.slug}`}>
                              <Button className='more float-end'>
                                Check product
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


export default ProductsComponent