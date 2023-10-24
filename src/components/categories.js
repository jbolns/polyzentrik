import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const CategoriesComponent = () => {
  // Get categories from across all blogs
  const data = useStaticQuery(graphql
    `query {
      allMdx(filter: { frontmatter: { type: { in: ["blog", "services", "resources"] } } }) {
        nodes {
          frontmatter {
            type
            categories
          }
        }
      }     
    }
  `)

  // Define the section and pick applicable categories
  // ... Section
  const section = window.location.pathname.split('/')[1]
  console.log('Current section is', section)

  // ... Applicable categories
  let allCats = data
    .allMdx
    .nodes
    .filter(ele => ele.frontmatter.type === section)
    .map(ele => ele.frontmatter.categories)
  console.log('Categories for this section are:', allCats)
  // ... Unique categories formatted
  let categories = new Set(allCats)
  categories = [...categories]
  //categories = categories.map(cat => cat.replace('-', ' '))
  console.log('Categories for this section are:', categories)

  // Return a menu bar containing only applicable categories
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="categorical rounded border border-dark" >
      <Container fluid className="p-0">
        <Navbar.Brand className="border-end border-dark px-2 py-1">Categories</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to={`/${section}/`} activeClassName="active">All</Link>
            {categories.map(category => (
              <Link key={category} to={`/${section}/${category}/`} activeClassName="active">{category.replace('-', ' ')}</Link>
            ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >






  )
}

export default CategoriesComponent