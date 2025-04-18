import React from 'react'
import { BsLinkedin, BsGithub, BsList } from 'react-icons/bs'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='my-0 py-0 main-nav fixed-top shadow'>
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className='ms-auto custom-toggler'>
          <span>
            <BsList />
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Item >
              <Nav.Link href='/'>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about/'>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item >
              <Nav.Link href='https://www.josebolanos.xyz'>
                Main website: www.josebolanos.xyz
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
          <Nav className='linky'>
            <Nav.Item>
              <Nav.Link href='https://www.linkedin.com/in/jbolns/' target='_blank' rel='noopener noreferrer'>
                <BsLinkedin title='LinkedIn' />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://github.com/jbolns' target='_blank' rel='noopener noreferrer'>
                <BsGithub title='GitHub' />
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavComponent