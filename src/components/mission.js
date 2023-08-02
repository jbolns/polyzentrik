import React from "react"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const MissionComponent = () => {
    return (
        <Container fluid className="horizontal-section shadow">
            <Row className="col-10 offset-1">
                <h3 className="pzntrk" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">Company</h3>
                <p data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    We do websites, data, and (applied) AI solutions.
                </p>
                <p data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                We have sustainability-oriented services and actively care for the social and environmental impact of everything we do. That said, our main advantage is that we are incredibly imaginative. If you face a complex digital transformation challenge with no clear solution in sight, no matter your industry or sector, polyzentrik is your best choice.
                </p>
                <p data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    Get in touch! No project is too small; no problem is too big.
                </p>
                <Col className="col-10 offset-1 col-lg-4 offset-lg-0" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    <Card>
                        <Card.Body>
                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                <p className="m-2">Our mission</p>
                            </Card.Title>
                            <Card.Text>
                                <p>To help individuals and SMEs access and use digital technologies, especially, but not exclusively, where it relates to sustainability.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-10 offset-1 col-lg-4 offset-lg-0" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    <Card>
                        <Card.Body>
                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                <p className="m-2">Our method</p>
                            </Card.Title>
                            <Card.Text>
                                <p>We think modularly. We are developing small services and resources that solve concrete challenges and can be combined into more complex solutions.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-10 offset-1 col-lg-4 offset-lg-0" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                    <Card>
                        <Card.Body>
                            <Card.Title data-sal="zoom-out" data-sal-delay="400" data-sal-easing="ease">
                                <p className="m-2">Our mindset</p>
                            </Card.Title>
                            <Card.Text>
                                <p>We lead by example. This page is fast and highly sustainable.
                                    Don't take our word for it. Ask <a href="https://pagespeed.web.dev/analysis/https-www-polyzentrik-com/hef1ww54o2?form_factor=desktop" target="_blank" rel="noopener noreferrer">Google's PageSpeed Insights</a> and
                                    the <a href="https://www.websitecarbon.com/website/polyzentrik-com/" target="_blank" rel="noopener noreferrer">WCC</a>.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MissionComponent