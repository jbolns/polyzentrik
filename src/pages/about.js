import React from 'react'
import { Link } from "gatsby"
import { BsLinkedin, BsGithub, BsTelephoneFill, BsEnvelope } from 'react-icons/bs'
import LayoutContent from '../components/layoutB'
import Seo from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const AboutPage = () => {
  return (
    <LayoutContent pageTitle='About'>
      <Row className='horizontal-section shadow text-center'>
        <Container fluid className='my-auto'>
          <Row className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
            <Container>
              <Row className='text-start'>
                <Row className='linky' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                  <p>Hi! I recently consolidated online activities on my personal (and now also professional) website.</p>
                  <p><strong><Link to="https://www.josebolanos.xyz">Click here to go to the new main website</Link></strong>.</p>
                </Row>
                <Row className='linky d-flex'>
                  <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h4>Company details</h4>
                    <p>Polyzentrik is a company name based in Finland.</p>
                    <p className='my-0'><strong>Company name.</strong> Polyzentrik Tmi.</p>
                    <p className='my-0'><strong>Business ID.</strong> 3331963-2.</p>
                    <p className='my-0'><strong>VAT Registry.</strong> FI33319632.</p>
                  </span>
                  <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h4>Contact</h4>
                    <p>Get in touch via any of the following channels:</p>
                    <ul className='ps-0'>
                      <li><a href='https://www.linkedin.com/in/jbolns/' target='_blank' rel='noreferrer' aria-label='Link to Linkedin'><BsLinkedin /></a></li>
                      <li><a href='https://github.com/jbolns' target='_blank' rel='noreferrer' aria-label='Link to GitHub'><BsGithub /></a></li>
                      <li><a href='tel:+358417049141' target='_blank' rel='noreferrer' aria-label='Link to telephone number'><BsTelephoneFill /></a></li>
                      <li><a href='mailto: hello@josebolanos.xyz?SUBJECT=Hi!' target='_blank' rel='noreferrer' aria-label='Link to send email'><BsEnvelope /></a></li>
                    </ul>
                  </span>
                </Row>
              </Row>
            </Container>
          </Row>
        </Container>
      </Row>

    </LayoutContent >
  )
}

export const Head = () => (
  <Seo title='Polyzentrik > About'
    description='Learn more about us and how to contact us.' />
)

export default AboutPage