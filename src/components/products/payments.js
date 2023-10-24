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
                  <h3 className='pzntrk'>For existing customers</h3>
                  <p>Existing customers can use this page to pay for services that were already delivered.</p>
                  <p>Payments are final and confirm satisfaction/acceptance with/of services received.<sup>1</sup></p>
                  <p></p>
                </Row>
                <Row className='linky d-flex'>
                  <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h4>Pay via Stripe</h4>
                    <p>Click the button below to make a payment via Stripe.<sup>2</sup></p>
                    <p>Thank you!</p>
                    <div className='my-2 text-end'>
                      <a href='https://buy.stripe.com/eVa16F6XJ6XB8PS4gk' target='_blank' rel='noreferrer noopener'>
                        <Button className='more border-secondary shadow w-75'>
                          Pay
                        </Button>
                      </a>
                      <p className='small'><Link to='/terms-conditions'>Terms & Conditions</Link></p>
                    </div>
                    <br />
                    <p>Please note the payment amount is not preset. You will need to manually enter the agreed amount.</p>
                  </span>
                  <span className='mb-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h5>Notes</h5>
                    <p className='small my-0'>1. This page is exclusively for existing customers. Do NOT use the payment facilities in this page if you are not a customer. All of our services have limited availability and need to be pre-arranged with us in person or via email. Any payments for services that have not been pre-arranged will be treated as donations.</p>
                    <p className='small my-0'>2. By clicking the button you accept the applicable sections of our <Link to='/terms-conditions'>Terms & Conditions</Link>. Payments are final.</p>
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