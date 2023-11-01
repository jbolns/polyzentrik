import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AnimationLazy from './animationlazy'
import LogoLazy from './logolazy'

const BrandingComponent = () => {
  const [animation, setAnimation] = React.useState(false)

  console.log('animation set to:', animation)
  if (animation === false) {
    console.log('loading logo')
    return (
      <section>
        <Container fluid className='text-center'>
          <Row className='logo'>
            <React.Suspense fallback={<></>}>
              <LogoLazy />
            </React.Suspense>
          </Row>
        </Container>
        <p className='text-end trigger'>Click <button className='highlight' onClick={() => setAnimation(true)}>here</button> for our interactive logo.</p>
      </section>
    )
  } else {
    console.log('loading animation')
    return (
      <section>
        <Container fluid className='text-center'>
          <Row className='scene'>
            <React.Suspense fallback={<></>}>
              <AnimationLazy />
            </React.Suspense>
          </Row>
          <Row className='p-0 m-0 d-flex align-items-end'>
            <Col className='col-12 text-end'>
              <h1 className='pzntrk float-end'>Polyzentrik</h1>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export default BrandingComponent