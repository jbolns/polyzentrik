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
                <Row className="p-2">
                    <Col md={6} className="">
                        <Row>
                            <h1 className="pzntrk mb-0">{data.site.siteMetadata.title}</h1>
                            <p className="mt-0 small copy-r">&#169; {fecha().year}. All rights reserved.</p>
                        </Row>
                    </Col>
                    <Col md={3} className='mt-3 mt-md-0'>
                        <h2>Services</h2>
                        <ul className="mt-0">
                            <li className=""><Link to="/services/tailored/">Tailored software solutions</Link></li>
                            <li className=""><Link to="/services/sustainability-reporting/">Sustainability reporting</Link></li>
                            <li className=""><Link to="/services/web-development/">Website development</Link></li>
                            <li className=""><Link to="/services/ai-content-strategy/">AI content strategy</Link></li>
                            <li className=""><Link to="/services/ai-interviews-focus-groups/">AI interview & focus groups</Link></li>
                            <li className=""><Link to="/services/ai-transcriptions/">AI transcriptions</Link></li>
                            <li className=""><Link to="/services/sustainability-content-ai/">AI content for sustainability</Link></li>
                        </ul>
                    </Col>
                    <Col className='mt-3 mt-md-0'>
                        <h2>Site</h2>
                        <ul className="mt-0">
                            <li className=""><Link to="/">Home</Link></li>
                            <li className=""><Link to="/blog/">Blog</Link></li>
                            <li className=""><Link to="/services/">Services</Link></li>
                            <li className=""><Link to="/roadmap/">Roadmap</Link></li>
                            <li className=""><Link to="/about/">About & Contact</Link></li>
                            <li className=""><Link to="/gateway/">Payments gateway</Link></li>
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