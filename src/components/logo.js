import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Logo = ({setAnimation}) => {
  return (
    <Row className='p-0 m-0 d-flex align-items-end'>
      <Col className=''>
        
        <div className='w-100 titlebar'>
          <p className='text-end trigger'>Click <button className='highlight' onClick={() => setAnimation(true)}>here</button> for an interactive logo.</p>
        </div>
      </Col>
    </Row>
  )
}

export default Logo