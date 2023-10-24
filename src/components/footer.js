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
        <div className="main-footer">
            <Container fluid>
                <Row className="p-2 d-flex mb-0 pb-0">
                    <Col lg={6}>
                        <Row>
                            <h1 className="pzntrk mb-0">{data.site.siteMetadata.title}</h1>
                            <p className="mt-0 small copy-r">&#169; {fecha().year}. All rights reserved.</p>
                            <span className='small mt-1 mt-lg-5'>
                                <p className='mb-0'>We try and lead by example.</p>
                                <p className='mb-0'>This website is verifiably <a href="https://pagespeed.web.dev/analysis/https-www-polyzentrik-com/hef1ww54o2?form_factor=desktop" target="_blank" rel="noopener noreferrer" className='pink'>fast</a> and quite <a href="https://www.websitecarbon.com/website/polyzentrik-com/" target="_blank" rel="noopener noreferrer" className='pink'>sustainable</a>.</p>
                                <p className='mb-0'>Also, it does not use Cookies. Browse in peace. We're not tracking you.</p>
                            </span>
                        </Row>
                    </Col>
                    <Col md={6} className='wordcloud mt-5 mt-md-0 text-end'>
                        <ul>
                            <li className="s2"><Link to="/">Home</Link></li>
                            <li className="s1"><Link to="/resources/">Resources</Link></li>
                            <li className="s3"><Link to="/services/">Services</Link></li>
                            <li className="s4"><Link to="/blog/">Blog</Link></li>
                            <li className="s5"><Link to="/roadmap/">Roadmap</Link></li>
                            <li className="s6"><Link to="/about/">About&Contact</Link></li>
                            <li className="s2"><Link to="/help-us-help/" className='pink'>Help us help</Link></li>
                            <li className="s7"><Link to="/gateway/">Payments gateway</Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="lower-footer d-flex p-2 small">
                    <Col className="text-end my-auto small">
                        <ul className="my-auto small">
                            <li><Link to="/terms-conditions/">Terms & Conditions | Privacy & Cookies | Disclaimer</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent