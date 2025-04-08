import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AnimationLazy from './animationlazy'

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
              <Row className='p-0 m-0 d-flex align-items-end'>
                <Col className='col-12 text-end'>
                  <div className='w-100'></div>
                  
                    <p className='text-end trigger'>Click <button className='highlight' onClick={() => setAnimation(true)}>here</button> for an interactive logo.</p>
                  
                </Col>
              </Row>
            </React.Suspense>
          </Row>
        </Container>
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

        </Container>
      </section>
    )
  }
}

export default BrandingComponent