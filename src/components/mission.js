import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MissionComponent = () => {
  return (
    <Container fluid className='horizontal-section shadow'>
      <Row className='col-10 offset-1 conversation'>
        <Col className='col-10 offset-1 col-lg-5 offset-lg-1 offset-lg-0'>
          <h3 className='pzntrk mb-3'>Our mission & strategy</h3>
          <p className='reply'>What's polyzentrik?</p>
          <p>Polyzentrik is a mission- rather than product-oriented company.</p>
          <p className='reply'>What's this mission?</p>
          <p><strong>To help build better and more sustainable digital technologies</strong>.</p>
          <p className='reply'>How?</p>
          <p>... We don't know the full answer to this question. No one does!</p>
          <p>That said, our long-term strategy is to make many small good things that add up to a toolkit for building digital technologies more ethically and sustainably.</p>
        </Col>
        <Col className='col-10 offset-1 col-lg-5 offset-lg-0'>
          <p className='reply'>And short-term, how can you help already today?</p>
          <p><strong>Check our resources.</strong> We are producing resources addressing specific but very important challenges – these might already help you approach digital technologies better and more sustainably.</p>
          <p><strong>Ask about bespoke services.</strong> We code (and can help you code) in a way that considers resource-utilisation across the entire chain (server energy, CO2, data requirements, etc.). This helps build solutions that perform, are cost-efficient, and keep society and the environment in mind.</p>
          <p><a href='mailto: hello@polyzentrik.com?SUBJECT=Hi!' target='_blank' rel='noreferrer' aria-label='Link to send email'><strong>Get in touch</strong></a> for more details.</p>
        </Col>
      </Row >
    </Container >
  )
}

export default MissionComponent