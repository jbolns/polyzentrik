import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const HomeBlog = () => {
  const data = useStaticQuery(graphql`
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
    `)

  const posts = data.allMdx.nodes

  return (
    <Container fluid className='horizontal-section shadow'>
      <Row className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2'>
        <Col lg={3} className='d-flex'>
          <Container>
            <h3 className='pzntrk' data-sal='slide-up' data-sal-delay='200' data-sal-easing='ease'>Latest from our blog</h3>
            <p className='word-breakie' data-sal='slide-up' data-sal-delay='200' data-sal-easing='ease'>We publish fairly decent content about data, AI, and digital sustain&shy;ability.</p>
            <Link to={`/blog/`}>
              <Button className='less' data-sal='slide-up' data-sal-delay='200' data-sal-easing='ease'>Go to blog</Button>
            </Link>
          </Container>
        </Col>
        <Col lg={9}>
          <Container>
            <Row className='d-flex'>
              {
                posts.map(node => (
                  <Col key={node.id} md={4} className='px-0 my-md-auto'>
                    <Card data-sal='slide-up' data-sal-delay='300' data-sal-easing='ease'>
                      <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                        <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt='Placeholder image' data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease' />
                      </Link>
                      <Card.Body data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>
                        <Card.Title data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>
                          <h4 className='small'><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h4>
                        </Card.Title>
                        <Card.Text data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>
                          <Link to={`/blog/${node.frontmatter.categories}`}>
                            <span className='cats highlight'>
                              {node.frontmatter.categories.replace('-', ' ')}
                            </span>
                          </Link>
                          <span className='clearer excerpt'>{node.excerpt}</span>
                          <span className='clearer'></span>
                          <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                            <Button className='more float-end' data-sal='zoom-out' data-sal-delay='200' data-sal-easing='ease'>Read full post</Button>
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

export default HomeBlog