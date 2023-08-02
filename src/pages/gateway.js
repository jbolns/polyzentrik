import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import ProductsComponent from "../components/products/products"


const GatewayPage = () => {
    return (
        <Layout pageTitle="Payments gateway">
            <ProductsComponent />
        </Layout >
    )
}

export const Head = () => (
    <Seo title="Polyzentrik > Gateway"
        description="Online payments gateway." />
)

export default GatewayPage