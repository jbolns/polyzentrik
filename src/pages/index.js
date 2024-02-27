import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProductsComponent from '../components/products'
import ResourcesComponent from '../components/resources'
import HomeBlog from '../components/homeblog'
import MissionComponent from '../components/mission'
import '../styles/pretty.css'

const HomePage = () => {
  return (
    <Layout pageTitle='Welcome'>
      <ProductsComponent />
      <HomeBlog />
      <ResourcesComponent />
      <MissionComponent />
    </Layout >
  )
}

export const Head = () => (
  <Seo title='Polyzentrik > Home' />
)

export default HomePage