import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import StatusTip from './statustip'

const ResourcesComponent = () => {
  const data = useStaticQuery(graphql
    `query {
      allMdx(
        sort: {frontmatter: {rank: DESC}}
        filter: {frontmatter: {type: {eq: "resources"}}}
        limit: 9) 
        {
          nodes {
            id
            frontmatter {
              title
              slug
              intro
              categories
              status
            }
          }
        }
      }
    `)

  const posts = data.allMdx.nodes

  return (
    <Container fluid className='horizontal-section shadow'>
      <Row>
        <Col className='col-lg-8 offset-lg-2'>
          <Container className='d-md-flex'>
            <Col className='mb-5 col-12 col-md-4'>
              <Container data-sal='slide-up' data-sal-delay='200' data-sal-easing='ease'>
                <h3 className='pzntrk'>Resources</h3>
                <p>Our mission is to help others do digital things better and more sustainably.</p>
                <p>These are our ongoing projects.</p>
                <p>Each has or will produce open-source or open-access resources for others to use.</p>
                <Link to={`/resources/`}>
                  <Button className='less float-end'>See all resources</Button>
                </Link>
                <span className='clearer'></span>
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
                              <Link to={`/resources/${node.frontmatter.slug}`}>
                                {node.frontmatter.title}
                              </Link></h4>
                          </Card.Title>
                          <Card.Text>
                            <span className='cats highlight'>
                              {node.frontmatter.categories.replace('-', ' ')}
                            </span>
                            <span className='clearer excerpt'>{node.frontmatter.intro}</span>
                            <span className='additional'>
                              <span className='status'>Status:&nbsp;</span>
                              <span className={node.frontmatter.status}>
                                {node.frontmatter.status}
                              </span>.
                              <StatusTip />
                            </span>
                            <span className='clearer'></span>
                            <Link to={`/resources/${node.frontmatter.slug}`}>
                              <Button className='more float-end'>
                                Read more
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


export default ResourcesComponent