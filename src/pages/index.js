import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import '../styles/pretty.css'
import BrandingComponent from '../components/branding'

const HomePage = () => {
  return (
    <Layout pageTitle='Welcome'>
      <BrandingComponent />
    </Layout >
  )
}

export const Head = () => (
  <Seo title='Polyzentrik > Home' />
)

export default HomePage