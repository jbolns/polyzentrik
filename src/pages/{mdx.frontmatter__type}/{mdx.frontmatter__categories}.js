import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Seo from '../../components/seo'
import Layout from '../../components/layout'
import CategoriesComponent from '../../components/categories'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ContentPage = ({ location, data }) => {
  const path = location.pathname.split('/')
  const posts = data.allMdx.nodes.filter(node => node.frontmatter.categories === path[2])

  // Infinite scroll implementation by Eric Howey (https://github.com/ehowey/loadmore-demo).
  // Can't really do better than that.

  // State for the list, state to trigger load, state to determine if there is more to load
  const [list, setList] = useState([...posts.slice(0, 10)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(posts.length > 10)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 10)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  const servicesWelcome = () =>
    <Row className='col-8 offset-2'>
      <p>These are our {path[2].replace('-', ' ')} services. Get in touch if you can't find something that fully meets your needs. We cannot do everything at once, but we can help you with pretty much anything digital.</p>
    </Row>

  const resourcesWelcome = () =>
    <Row className='col-8 offset-2'>
      <p>These are our ongoing open-source or open-access projects in the {path[2].replace('-', ' ')} space. Each has or will produce resources for others to use.</p>
    </Row>

  const blogWelcome = () =>
    <Row className='col-8 offset-2'>
      <p>We sometimes publish fairly decent content about data, AI, and digital sustain­ability. Give it a read and let us know what you think!</p>
    </Row>

  // Now do the posts
  return (
    <Layout pageTitle={path[1] + ': ' + path[2].replace('-', ' ')} >
      <Container fluid>
        {path[1] === 'services' && servicesWelcome()}
        {path[1] === 'resources' && resourcesWelcome()}
        {path[1] === 'blog' && blogWelcome()}
        <Row className='horizontal-section shadow'>
          <Container className='col-10 mb-3 categorical'>
            <CategoriesComponent />
          </Container>
          <Container className='col-10 offset-1'>
            <ResponsiveMasonry columnsCountBreakPoints={{ 375: 1, 767: 2, 991: 3, 1199: 4, 1399: 5 }}>
              <Masonry>
                {
                  list.map(node => (
                    <Card>
                      <article key={node.id} className={node.frontmatter.categories}>
                        <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                          <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt='Placeholder image' />
                        </Link>
                        <Card.Body>
                          <Card.Title>
                            <h3><Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}> {node.frontmatter.title}</Link></h3>
                          </Card.Title>
                          <Card.Text>
                            <p>{node.excerpt}</p>
                            <Link to={`/${node.frontmatter.type}/${node.frontmatter.slug}`}>
                              <Button variant='light' className='more float-end mb-3 mx-3' >
                                Read full post
                              </Button>
                            </Link>
                          </Card.Text>
                        </Card.Body>
                      </article>
                    </Card>
                  ))
                }
              </Masonry>
            </ResponsiveMasonry>
            <Container className='text-center'>
              {hasMore ? (
                <Button onClick={handleLoadMore} variant='dark' className='bg-black big-p w-75 mt-3'>Click to load more.</Button>
              ) : (
                <span></span>
              )}
            </Container>
          </Container>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {type: {in: ["blog", "services", "resources"]}}}
      ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          type
          categories
          author
          hero_image {
            childImageSharp {
              gatsbyImageData  (
                layout: CONSTRAINED
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
export const Head = ({ location }) => (
  <Seo title={'Polyzentrik > ' + location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2, -1)}
    description='Read more in our website.' />
)

export default ContentPage