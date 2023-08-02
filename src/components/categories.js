import React from 'react'
import { Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../components/pretty.css"

const CategoriesComponent = (  ) => {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="categorical rounded border border-dark" >
            <Container fluid className="p-0">
                <Navbar.Brand className="border-end border-dark px-2 py-1">Categories</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to="/blog/" activeClassName="active">All</Link>
                        <Link to="/blog/polyzentrik/" activeClassName="active">Polyzentrik</Link>
                        <Link to="/blog/sustainability/" activeClassName="active">Sustainability</Link>
                        <Link to="/blog/artificial-intelligence/" activeClassName="active">Artificial intelligence</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >






    )
}

export default CategoriesComponent