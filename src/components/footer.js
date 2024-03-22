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
    <div className='main-footer'>
      <Container fluid>
        <Row className='p-2 d-flex mb-0 pb-0'>
          <Col lg={6}>
            <Row>
              <h1 className='pzntrk mb-0'>{data.site.siteMetadata.title}</h1>
              <p className='mt-0 small copy-r'>&#169; {fecha().year}. All rights reserved.</p>
              <span className='small mt-1 mt-lg-5'>
                <p className='mb-0'>We try and lead by example.</p>
                <p className='mb-0'>This website is verifiably <a href='https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=https%3A%2F%2Fwww.polyzentrik.com%2F&category=PERFORMANCE&strategy=DESKTOP&alt=json&fields=lighthouseResult.categories.performance&prettyPrint=true%20HTTP/1.1' target='_blank' rel='noopener noreferrer' className='pzntrk'>fast</a> and quite <a href='https://www.websitecarbon.com/website/polyzentrik-com/' target='_blank' rel='noopener noreferrer' className='pzntrk'>sustainable</a>.</p>
                <p className='mb-0'>Also, it does not use Cookies. Browse in peace. We're not tracking you.</p>
              </span>

            </Row>
          </Col>
          <Col md={6} className='wordcloud mt-5 mt-md-0 text-end'>
            <ul>
              <li className='s2'><Link to='/'>Home</Link></li>
              <li className='s1'><Link to='/products/'>Products</Link></li>
              <li className='s1'><Link to='/resources/'>Resources</Link></li>
              <li className='s3'><Link to='/services/'>Services</Link></li>
              <li className='s6'><Link to='/about/'>About&Contact</Link></li>
              <li className='s2'><Link to='/help-us-help/' className='text-decoration-underline'>Help us help</Link></li>
              <li className='s7'><Link to='/gateway/'>Payments gateway</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className='lower-footer d-flex p-2 small'>
          <Col className='text-end my-auto small'>
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