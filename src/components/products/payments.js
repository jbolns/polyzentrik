import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const PaymentsComponent = () => {
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
                  <h3 className='pzntrk'>Pay for services</h3>

                  <p></p>
                </Row>
                <Row className='linky d-flex'>
                  <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <p>Click the button below to pay for services delivered.<sup>1</sup> Payments are handled via Stripe.<sup>2</sup></p>
                    <p>The amount is not preset. You will need to manually enter the agreed amount.</p>
                    <div className='my-2 text-end'>
                      <a href='https://buy.stripe.com/eVa16F6XJ6XB8PS4gk' target='_blank' rel='noreferrer noopener'>
                        <Button className='more border-secondary shadow w-75'>
                          Pay
                        </Button>
                      </a>
                      <p className='small'><Link to='/terms-conditions'>Terms & Conditions</Link></p>
                    </div>
                    <p>Thank you!</p>
                    <br />
                  </span>
                  <span className='mb-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h5>Notes</h5>
                    <p className='small my-0'>1. Payments are final and confirm satisfaction with products or services. Do NOT use this page to book services. We have limited availability. Payments for services that have not been pre-arranged will be treated as voluntary payments relating to an open-source or open-access resource of our choice.</p>
                    <p className='small my-0'>2. By clicking the button you accept the applicable sections of our <Link to='/terms-conditions'>Terms & Conditions</Link>.</p>
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

export default PaymentsComponent