import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Logo = () => {
  return (
    <Row className='p-0 m-0 d-flex align-items-end'>
      <Col className='col-12 text-end'>
        <StaticImage src='../images/graphics/logo.png' alt='Photo of J' className='rounded from-right' />
        <div className='w-100'></div>
        <div className='titlebar'>
          <h1 className='pzntrk'>Polyzentrik</h1>
          <h2>Better and more sustainable digital technologies</h2>
        </div>
      </Col>
    </Row>
  )
}

export default Logo