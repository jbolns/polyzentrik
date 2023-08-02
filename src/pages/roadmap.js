import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const RoadmapPage = () => {
    return (
        <Layout pageTitle="Strategic Roadmap">
            <Container>
                <Row className="roadmap">
                    <Col md={6} className="my-2">
                        <Card className="shadow" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                            <Card.Body className="px-0 py-0">
                                <h3 className="pzntrk mt-0 py-3 px-2 mb-3 checkers card-title small">ASCII Roadmap</h3>
                                <Card.Text className="ascii px-3">
                                    <p>Our strategy, visualised in the best format the Internet has to offer.</p>
                                    <pre>::::::::::::::::::::::::::::::::::::</pre>
                                    <pre>::   ___     ___    ___   ____    ::</pre>
                                    <pre>::  |__ \   / _ \  |__ \  |___ \  ::</pre>
                                    <pre>::     ) | | | | |    ) |   __) | ::</pre>
                                    <pre>::    / /  | | | |   / /   |__ /  ::</pre>
                                    <pre>::   / /_  | |_| |  / /_   ___) | ::</pre>
                                    <pre>::  |____|  \___/  |____| |____/  ::</pre>
                                    <pre>::        ....................... ::</pre>
                                    <pre>::            YEAR OF FOUNDATIONS ::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>::  _ Introducing products that _ ::</pre>
                                    <pre>::   . Make sense individually .  ::</pre>
                                    <pre>::    . Can later be combined .   ::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>:: ...............                ::</pre>
                                    <pre>:: ...............................::</pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: --- Early-2023:                  </pre>
                                    <pre>:: :    * Content creation          </pre>
                                    <pre>:: :    * AI (supported) content    </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: --- Mid-2023:                    </pre>
                                    <pre>:: :    * Analytics                 </pre>
                                    <pre>:: :    * AI (enhanced) analytics   </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: --- Late-2023:                   </pre>
                                    <pre>:: :    * Web & apps                </pre>
                                    <pre>:: :    * AI (capable) software     </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: :::::::::::::::::::              </pre>
                                    <pre>::                  ::              </pre>
                                    <pre>::::::::::          ::::::::::::::::</pre>
                                    <pre>::   ___     ___    ___    _  _   ::</pre>
                                    <pre>::  |__ \   / _ \  |__ \  | || |   ::</pre>
                                    <pre>::     ) | | | | |    ) | | || |_  ::</pre>
                                    <pre>::    / /  | | | |   / /  |__   _| ::</pre>
                                    <pre>::   / /_  | |_| |  / /_     | |   ::</pre>
                                    <pre>::  |____|  \___/  |____|    |_|   ::</pre>
                                    <pre>::        ....................... ::</pre>
                                    <pre>::           YEAR OF COMBINATIONS ::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>::   _ Combining products into _  ::</pre>
                                    <pre>::     . Open/public toolkits .   ::</pre>
                                    <pre>::. Tailored corporate solutions .::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>:: ...............                ::</pre>
                                    <pre>:: ...............................::</pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: :                                </pre>
                                    <pre>:: :::::::::::::::::::::::::::::::::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>::  Get in touch for details.     ::</pre>
                                    <pre>::                                ::</pre>
                                    <pre>::::::::::::::::::::::::::::::::::::</pre>
                                    <br />
                                    <br />
                                    <p className="small">* Parts of this roadmap generated with PAT-or-JK's <a href="https://patorjk.com/software/taag/" target="_blank" rel="noreferrer">Text to ASCII Art Generator</a>. Thanks!</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="my-2">
                        <Card className="shadow" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                            <Card.Body className="px-0 py-0">
                                <h3 className="pzntrk mt-0 py-3 px-2 mb-3 checkers card-title small">Summary strategy</h3>
                                <Card.Text className="px-3" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                                    <p>Polyzentrik will follow Y Combinator's "plan for the worst" <a href="https://techcrunch.com/2022/05/19/yc-advises-founders-to-plan-for-the-worst/" target="_blank" rel="noreferrer">advice</a> and adhere to what is known as a <em>default alive</em> strategy. If possibilities allow, the plan can be accelerated. If needed, however, the company aims to be ready to survive the current crisis in development mode.</p>
                                    <p>Guidelines:</p>
                                    <ul >
                                        <li>1-y. runway minimum, 2-y. ideal</li>
                                        <li>Steady capacity development at the speed allowed by funding</li>
                                        <li>Burn rate minimised by operating with no debt</li>
                                        <li>Proactive marketing on free and low-cost channels</li>
                                        <li>Being ready to fill in the blanks left by others is important</li>
                                        <li>A key goal is to come out of the crisis with the capacity to rapidly deploy ambitious solutions when things re-ignite.</li>
                                    </ul>
                                    <p>Funding may be sought to accelerate development, provided it does not require deviating from the above.</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export const Head = () => (
    <Seo title="Polyzentrik > Roadmap"
        description="Learn more about Polyzentrik's strategy." />
)

export default RoadmapPage