import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProductsComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {type: {eq: "products"}}}
        limit: 3) 
        {
        nodes {
          frontmatter {
            title
            slug
            intro
            categories
            license
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
    `)

  const posts = data.allMdx.nodes

  return (
    <Container fluid className='horizontal-section shadow bg-highlight'>
      <Row>
        <Col className='col-lg-6 offset-lg-3 lokal'>
          <Container className='d-md-flex flex-wrap'>
                <StaticImage src='..\images\graphics\LOKAL-banner.webp' alt='A banner logo of LOKAL' className='no-effect' />
                  {
                    posts.map(node => (
                      <Card key={node.id} variant='top' className='h-100 mt-1' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
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
                    ))
                  }
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductsComponent