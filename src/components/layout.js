import React from 'react'
import FooterComponent from './footer'
import BrandingComponent from './branding'
import NavComponent from './nav'
import TopperComponent from './topper'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import "../components/pretty.css"
import "../components/pretty.css"

const Layout = ({ pageTitle, children }) => {

    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <Container fluid>
                <header>
                    <NavComponent />
                    <BrandingComponent />
                    <TopperComponent />
                </header>
                <main>
                    <section>
                        <Container fluid>
                            <Row className="col-8 offset-2 titulazo">
                                <h2 className="pzntrk">{pageTitle}</h2>
                            </Row>
                            <Row>
                                <div>{children}</div>
                            </Row>
                        </Container>
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