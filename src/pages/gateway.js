import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PaymentsComponent from '../components/products/payments'


const GatewayPage = () => {
    return (
        <Layout pageTitle='Online payments gateway'>
            <PaymentsComponent />
        </Layout >
    )
}

export const Head = () => (
    <Seo title='Polyzentrik > Help us help'
        description='Online payments gateway.' />
)

export default GatewayPage