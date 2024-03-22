import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProductsComponent from '../components/products'
import ServicesComponent from '../components/services'
import ResourcesComponent from '../components/resources'
import MissionComponent from '../components/mission'
import '../styles/pretty.css'

const HomePage = () => {
  return (
    <Layout pageTitle='Welcome'>
      <ProductsComponent />
      <MissionComponent />
      <ServicesComponent />
      <ResourcesComponent />
    </Layout >
  )
}

export const Head = () => (
  <Seo title='Polyzentrik > Home' />
)

export default HomePage