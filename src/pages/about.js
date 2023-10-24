import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { BsLinkedin, BsGithub, BsHouseFill, BsTelephoneFill, BsEnvelope } from 'react-icons/bs'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const AboutPage = () => {
  return (
    <Layout pageTitle='About'>
      <Row className='horizontal-section shadow text-center'>
        <Container fluid className='my-auto'>
          <Row className='col-lg-10 offset-lg-1 col-xl-8 offset-xl-2' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
            <Col lg={5} className='py-5'>
              <Container className='my-md-auto text-start'>
                <StaticImage src='../images/with-Ando.jpeg' alt='Photo of J' className='rounded' />
                <span className='linky'>
                  <ul className='text-end small'>
                    <li><a href='https://www.linkedin.com/in/jbolns' target='_blank' rel='noreferrer' aria-label='Link to Linkedin'><BsLinkedin /></a></li>
                    <li><a href='https://github.com/jbolns' target='_blank' rel='noreferrer' aria-label='Link to GitHub'><BsGithub /></a></li>
                    <li><a href='https://www.josebolanos.xyz/' target='_blank' rel='noreferrer' aria-label='Link to personal website'><BsHouseFill /></a></li>
                  </ul>
                </span>
                <span className='hidey-lg'>
                <Tabs defaultActiveKey='education' id='left-tabs' className='small' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                  <Tab eventKey='education' title='Education'>
                    <h3 className='small'>Degree</h3>
                    <p className='my-0'><strong>PhD Political Economy.</strong> 2020, King's College London (KCL)</p>
                    <p className='my-0'><em> – with </em> <strong>Associateship of King’s College (AKC) (Ethics, Religion, Philosophy).</strong> 2021.</p>
                    <p className='my-0'><strong>MA Environment Politics & Globalisation.</strong> 2012, KCL.</p>
                    <p><strong>BA International Relations.</strong> 2010, Taltech.</p>
                    <h3 className='small'>Selected specialisations</h3>
                    <p className='my-0'><strong>Data Warehousing.</strong> Univ. of Colorado, Coursera. 2022.</p>
                    <p className='my-0'><strong>AI Product Management.</strong> Duke, Coursera. 2022.</p>
                    <p className='my-0'><strong>Data Analytics.</strong> Google, Coursera. 2022.</p>
                    <p className='my-0'><strong>Project Management.</strong> Google, Coursera. 2021.</p>
                    <p className='my-0'><strong>Full Stack Web Development with React.</strong> HK Univ. of Sc. & Tech, Coursera. 2022.</p>
                    <p className='my-0'><strong>Web Applications [Design].</strong> Univ. of Michigan, Coursera. 2021.</p>
                    <p className='my-0'><strong>Web Design.</strong> Univ. of Michigan, Coursera. 2021.</p>
                    <p className='my-0'><strong>Excel Data Analyics & Visualisation.</strong> Macquarie Univ, Coursera. 2022.</p>
                    <p><strong>Excel VBA [Automation].</strong> Univ. of Colorado Boulder, Coursera. 2021.</p>
                  </Tab>
                  <Tab eventKey='experience' title='Experience'>
                    <h3 className='small'>Present</h3>
                    <p><strong>Founder.</strong> Polyzentrik</p>
                    <h3 className='small'>Past</h3>
                    <p className='mb-0'><strong>Post-Doctoral Research Fellow</strong>, <em>then</em> <strong>Research Associate.</strong> London School of Economics (LSE).</p>
                    <p className='mb-0'><strong>Assistant Lecturer.</strong> TU Dresden.</p>
                    <p className='mb-0'><strong>Research Assistant</strong>, <em>then</em> <strong>Teaching Assistant</strong>, <em>then</em> <strong>Research Fellow.</strong> King's College London (KCL).</p>
                  </Tab>
                </Tabs>
                </span>
              </Container>
            </Col>
            <Col lg={7} className='my-0 my-lg-5'>
              <Container>
                <Row className='text-start'>
                  <Row className='linky py-lg-5' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                    <h3 className='my-md-auto pzntrk'>Polyzentrik's story</h3>
                    <p>Hi! I am J (Dr José A Bolanos). I founded and run Polyzentrik. The little one there with me is my son Ando. He helps me proofread.</p>
                    <p>I was an academic for a bit, focused on sustainability, private governance, and policy. I am now amongst probably-few political economists who can talk shop with data and AI engineers.</p>
                    <p>The transition was somewhat of an accident.</p>
                    <p>I took time after my last position to learn to code a little. Soon after, my father passed just months before Ando was born. It was not easy. I took refuge in spending time with Ando and continued coding. And I learned, and kept learning, and then learned more.</p>
                    <p>The experience changed me.</p>
                    <p>I remain interested in intellectual debates, but I am now also a more practical person who believes that while digital technologies have risks that need to be managed, they can do much good.</p>
                    <p>I therefore want to help produce better and more sustainable digital technologies.</p>
                  </Row>
                  <Row className='linky d-flex'>
                    <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                      <h4>Contact</h4>
                      <p>Get in touch with us through any of the following channels:</p>
                      <ul className='ps-0'>
                        <li><a href='https://www.linkedin.com/company/polyzentrik/' target='_blank' rel='noreferrer' aria-label='Link to Linkedin'><BsLinkedin /></a></li>
                        <li><a href='https://github.com/jbolns' target='_blank' rel='noreferrer' aria-label='Link to GitHub'><BsGithub /></a></li>
                        <li><a href='tel:+358417049141' target='_blank' rel='noreferrer' aria-label='Link to telephone number'><BsTelephoneFill /></a></li>
                        <li><a href='mailto: hello@polyzentrik.com?SUBJECT=Hi!' target='_blank' rel='noreferrer' aria-label='Link to send email'><BsEnvelope /></a></li>
                      </ul>
                    </span>
                    <span className='my-3' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                      <h4>Company details</h4>
                      <p>Polyzentrik is a company name based in Finland.</p>
                      <p className='my-0'><strong>Company name.</strong> Polyzentrik Tmi.</p>
                      <p className='my-0'><strong>Business ID.</strong> 3331963-2.</p>
                      <p className='my-0'><strong>VAT Registry.</strong> FI33319632.</p>
                    </span>
                  </Row>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Row>

      <Container fluid className='horizontal-section shadow' data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
        <Row>
          <Col className='col-lg-6 offset-lg-3'>
            <Container>
              <span data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                <h3 className='my-md-auto pzntrk'>Additional credits</h3>
                <p>Unless otherwise noted, resources on this website are proprietary, available in the public domain, or under licenses which allow commercial use
                  without attribution. That said, we are grateful to the persons/organisations whose work facilitated ours.</p>
              </span>
              <span data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                <p className='mb-0'><strong>Software</strong></p>
                <ul>
                  <li><a href='https://www.gatsbyjs.com/' target='_blank' rel='noreferrer'>Gatsby</a>. This website is a Gatsby (React + GraphQL) implementation.</li>
                </ul>
              </span>
              <span data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                <p className='mb-0'><strong>Photography</strong></p>
                <ul>
                  <li><a href='https://evacristina.com/' target='_blank' rel='noreferrer'>Eva Cristina</a>. Eva Cristina kindly provided the home page photo of our initial website.</li>
                </ul>
              </span>
              <span data-sal='slide-up' data-sal-delay='400' data-sal-easing='ease'>
                <p className='mb-0'><strong>Graphics</strong></p>
                <ul>
                  <li><a href='https://freesvg.org/' target='_blank' rel='noreferrer'>Free SVG</a>. Some of this website's logos are based on SVGs graphics made freely available by FreeSVG.</li>
                  <li><a href='https://huggingface.co/spaces/stabilityai/stable-diffusion' target='_blank' rel='noreferrer'>Stable Diffusion</a>. Some of this website's logos were generated with Stable Diffusion.</li>
                </ul>
              </span>
            </Container>
          </Col>
        </Row>
      </Container>

    </Layout >
  )
}

export const Head = () => (
  <Seo title='Polyzentrik > About'
    description='Learn more about us and how to contact us.' />
)

export default AboutPage