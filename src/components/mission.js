import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MissionComponent = () => {
    return (
        <Container fluid className='horizontal-section shadow'>
            <Row className='col-10 offset-1 conversation'>
                <Col className='col-10 offset-1 col-lg-5 offset-lg-1 offset-lg-0'>
                    <h3 className='pzntrk' >Company</h3>
                    <p className='reply'>What's polyzentrik?</p>
                    <p>Polyzentrik is a mission- rather than product-oriented company.</p>
                    <p className='reply'>What's this mission?</p>
                    <p><strong>To help others produce better and more sustainable digital technologies</strong>.</p>
                    <p className='reply'>How can digital technologies be better and more sustainable?</p>
                    <p>... We don't know the full answer to this question. No one does!</p>
                    <p>So, long-term, the plan is <strong>to learn and change constantly as we figure it out</strong>. Check the <Link to='/about/'>about</Link> section. We are ideally qualified for this.</p>
                </Col>
                <Col className='col-10 offset-1 col-lg-5 offset-lg-0'>
                    <p className='reply'>And short-term, how can you help already today?</p>
                    <p>Two ways.<br />
                        1. <strong>Check our resources.</strong> We are already producing resources addressing specific but very important challenges. These resources might already help you approach digital technologies better and more sustainably.</p>
                    <p>2. <strong>Get in touch!</strong> As noted above, we code alright. We can tailor solutions to your needs.</p>
                </Col>
            </Row >
        </Container >
    )
}

export default MissionComponent