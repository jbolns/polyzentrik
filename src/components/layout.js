import React from 'react'
import FooterComponent from './footer'
import NavComponent from './nav'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Layout = ({ pageTitle, children }) => {

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <Container fluid className='h-100'>
        <header>
          <NavComponent />
        </header>
        <main>
          <section>
              <Row>
                <div>{children}</div>
              </Row>
          </section>
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </Container>

    )
  }
}

export default Layout