import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { fecha } from './swagger'

const FooterComponent = () => {
  const data = useStaticQuery
    (graphql`query {
        site {
        siteMetadata {
            title,
            description
                }
            }
        }
    `)

  return (
    <div className='fixed-bottom bg-white'>
      <Container fluid>
        <Row className='p-2 d-flex my-0 pb-0'>
            <Col className='col-6'>
              <h1 className='pzntrk mb-0'>{data.site.siteMetadata.title}</h1>
              <p className='my-0 small copy-r'>&#169; {fecha().year}. All rights reserved.</p>
            </Col>
        
          <Col className='col-6 text-end my-auto small'>
            <ul className='my-auto small'>
              <li><Link to='/terms-conditions/'>Terms & Conditions | Privacy & Cookies | Disclaimer</Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent