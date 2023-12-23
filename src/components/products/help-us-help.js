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
                </Row>
                <Row className='linky d-flex'>
                  <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h4>Help us help</h4>
                    <p>Help us spend more time in open-source/access resources by making a voluntary payment for usage of WEIRD or any other of our open-source resources.<sup>1</sup> Payments are handled via Stripe.<sup>2</sup></p>
                    <p>If you add the necessary information in the payment form, we will, provided we deem the information valid and apropriate, add you to the list of supporters of the resource your payment relates to.</p>
                    <div className='my-2 text-end'>
                      <a href='https://buy.stripe.com/28o16Fci381F7LOeUX' target='_blank' rel='noreferrer noopener'>
                        <Button className='more border-secondary shadow w-75'>
                          Pay
                        </Button>
                      </a>
                      <p className='small'><Link to='/terms-conditions'>Terms & Conditions</Link></p>
                    </div>
                    <br />
                    <p>The amount is completely up to you. Our open-source/access projects take thousands of $/£/€ in human hours.<sup>3</sup></p>
                  </span>
                  <span className='mb-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h5>Notes</h5>
                    <p className='small my-0'>1. Payments are final and confirm satisfaction with products/services.</p>
                    <p className='small my-0'>2. By clicking the button you accept the applicable sections of our <Link to='/terms-conditions'>Terms & Conditions</Link>.</p>
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