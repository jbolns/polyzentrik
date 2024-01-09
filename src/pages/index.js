import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import ResourcesComponent from '../components/resources'
import HomeBlog from '../components/homeblog'
import MissionComponent from '../components/mission'
import ServicesComponent from '../components/services'
import '../styles/pretty.css'

const HomePage = () => {
  return (
    <Layout pageTitle='Welcome'>
      <ResourcesComponent />
      <HomeBlog />
      <MissionComponent />
    </Layout >
  )
}

export const Head = () => (
  <Seo title='Polyzentrik > Home' />
)

export default HomePage