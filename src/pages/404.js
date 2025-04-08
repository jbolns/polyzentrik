import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const NotFoundPage = () => {
  return (

    <Layout pageTitle='Page not found'>
      <Row className='horizontal-section shadow'>
        <Container fluid className='my-auto'>
          <Row className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
  
              <p>Sorry 😔, the page you're looking for does not exist.</p>
              <p>I recently consolidated online activities on my personal (and now also professional) website. Maybe the page moved there.</p>
              <h3><strong><Link to="https://www.josebolanos.xyz">Click here to go to the new main website</Link></strong>.</h3>
    
          </Row>
        </Container>
      </Row>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo title="Polyzentrik > 404"
    description="Page not found." />
)
