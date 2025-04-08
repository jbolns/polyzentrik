import * as React from "react"
import Seo from '../components/seo'
import LayoutB from '../components/layoutB'
import TermsComponent from "../components/terms"
import PrivacyComponent from "../components/privacy"
import CookiesComponent from "../components/cookies"
import DisclaimerComponent from "../components/disclaimer"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const TermsConditionsPage = () => {
    return (
        <LayoutB pageTitle="Terms & conditions">
            <Row>
                <Col md={12}>
                    <Container className="border rounded bg-white px-3 mt-5">
                        <Row className="my-2">
                            <Col>
                                <h3 className="my-3 border-bottom">Summary</h3>
                                <p className="small">You acknowledge, agree, and accept that this Website is offered as-is and without any warranties, and that Your use of this Website constitutes agreement to all terms, conditions, and policies below.</p>
                                <p className="small">While I/we (hereby referred as we for the use of consistent language) reserve the right to change this, we do not currently use Cookies in Our Website.</p>
                                <p className="small">Where the specifics of any policy contradict this summary, the policy takes precedence. Where applicable laws contradict anything in the policies, the law obviously takes precedence. </p>
                                <h3 className="my-3 border-bottom">Detailed policies</h3>
                                <p className="small">By using Our Website and/or buying or otherwise using Our Products, you agree to the above summary and all policies below.</p>
                                <Tabs defaultActiveKey="terms" id="left-tabs" className="mb-3 small">
                                    <Tab eventKey="terms" title="Terms & Conditions">
                                        <TermsComponent />
                                    </Tab>
                                    <Tab eventKey="privacy" title="GDPR/Privacy">
                                        <PrivacyComponent />
                                    </Tab>
                                    <Tab eventKey="cookies" title="Cookies">
                                        <CookiesComponent />
                                    </Tab>
                                    <Tab eventKey="disclaimer" title="Disclaimer">
                                        <DisclaimerComponent />
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Container>
                </Col>

            </Row>
        </LayoutB >
    )
}

export const Head = () => (
    <Seo title="Polyzentrik > Terms & conditions"
        description="Terms, conditions, & other policies." />
)

export default TermsConditionsPage