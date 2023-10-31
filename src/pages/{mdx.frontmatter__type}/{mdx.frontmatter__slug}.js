import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import ShareComponent from '../../components/share'
import Seo from '../../components/seo'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Post = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.type}>
      <Container className={data.mdx.frontmatter.type}>
        <Row className='horizontal-section shadow article-title'>
          <Col lg={6}>
            <h2 className='pzntrk my-0 pb-1'>{data.mdx.frontmatter.title}</h2>
            <p className='small text-center my-0 pb-4 text-lg-end optional'>By <a href={data.mdx.frontmatter.author_link} target='blank' rel='noreferrer'>{data.mdx.frontmatter.author}</a>.</p>
            <span className='float-end border-top top-sm'><ShareComponent /></span>
          </Col>
          <Col sm={12} lg={5} className='border-start border-bottom align-self-end'>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
            <p className='mb-1 small'>Image credits: <a href={data.mdx.frontmatter.hero_image_credit_link} target='blank' rel='noreferrer'>{data.mdx.frontmatter.hero_image_credit_text}</a>.</p>
          </Col>
          <Col className='py-3 px-4 article-content'>
            <h3>Introduction</h3>
            {children}
            <Container fluid className='my-3'>
              <span className='float-end'>
                <ShareComponent />
              </span>
            </Container>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        type
        author
        author_link
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
        hero_image {
          publicURL
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              
              )
          }
        }
      }
    }
  }
`
export const Head = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title}
    image={data.mdx.frontmatter.hero_image.publicURL}
    description='Read more in our website.' />
)

export default Post