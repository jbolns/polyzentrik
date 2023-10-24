import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const HelpUsHelpComponent = () => {
  return (
    <Row className='horizontal-section shadow'>
      <Container fluid>
        <Row className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
          <Col lg={5}>
            <Container>
              <StaticImage src='../../images/with-Ando.jpeg' alt='Photo of J' className='rounded' />
            </Container>
          </Col>
          <Col lg={7} className='mt-3 mt-lg-0'>
            <Container>
              <Row>
                <Row data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                  <h3 className='pzntrk'>Our biggest dilemma</h3>
                  <p>Every minute we invest in commercial tasks is a minute not spent in open-source or open-access resources.</p>
                  <p>It is no more complex than that.</p>
                  <p>Over time, we hope to partially fund development of open-source or open-access resources from commercial projects. Also, some of the open-access resources <strong><u>will</u></strong> have licenses that might eventually bring in revenue.</p>
                  <p>However, it's still too early for any of that.</p>
                  <p>At the moment, it's a minute-by-minute situation. We do one or the other.</p>
                </Row>
                <Row className='linky d-flex'>
                  <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h4>Help us help</h4>
                    <p>You can help us spend more time in open-source and open-access resources by clicking on the button below and making a small donation via Stripe.<sup>1</sup></p>
                    <p>To thank you, we will add your name to the list of 'supporters' in the project benefiting from your support.<sup>2</sup></p>
                    <div className='my-2 text-end'>
                      <a href='https://buy.stripe.com/28o16Fci381F7LOeUX' target='_blank' rel='noreferrer noopener'>
                        <Button className='more border-secondary shadow w-75'>
                          Help us help
                        </Button>
                      </a>
                      <p className='small'><Link to='/terms-conditions'>Terms & Conditions</Link></p>
                    </div>
                    <br />
                    <p>The amount is completely up to you. Since they address challenges without clear-cut solutions, our open-source/access projects take thousands of $/£/€ in human hours. Any little bit helps.<sup>3</sup></p>
                  </span>
                  <span className='mb-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h5>Notes</h5>
                    <p className='small my-0'>1. By clicking the button you accept the applicable sections of our <Link to='/terms-conditions'>Terms & Conditions</Link>. Payments are final.</p>
                    <p className='small my-0'>2. For small donations, we choose the project. <a href='mailto: hello@polyzentrik.com?SUBJECT=I would like to support a specific project!' target='_blank' rel='noreferrer' aria-label='Link to send email'>Get in touch</a> if you want to support a specific project.</p>
                    <p className='small my-0'>3. We would, of course, be delighted if you want to support a full project. <a href='mailto: hello@polyzentrik.com?SUBJECT=I would like to support a full project!' target='_blank' rel='noreferrer' aria-label='Link to send email'>Get in touch</a> to discuss full-project contributions.</p>
                  </span>
                </Row>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Row>
  )
}

export default HelpUsHelpComponent