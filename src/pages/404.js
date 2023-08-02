import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Row from 'react-bootstrap/Row'
import "../components/pretty.css"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page not found">
      <Row>
        <p>Sorry 😔, we couldn’t find what you were looking for. Chances are, this page does not exist.</p>
        <p>Try creating a page if you are an admin.</p>
        <h3><strong><Link to="/">Click here to go home</Link></strong>.</h3>
      </Row>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => (
  <Seo title="Polyzentrik > 404"
    description="Page not found." />
)
