import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import HelpUsHelpComponent from '../components/products/help-us-help'


const GatewayPage = () => {
    return (
        <Layout pageTitle='Help us help'>
            <HelpUsHelpComponent />
        </Layout >
    )
}

export const Head = () => (
    <Seo title='Polyzentrik > Help us help'
        description='Help us build tools that support others in building better and more sustainable digital technologies.' />
)

export default GatewayPage