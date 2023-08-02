import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from 'react-bootstrap/Container'

const ProductsComponent = () => {
    return (
        <Container className="mt-5">
            <p className="big-p" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">Online payments gateway<sup>1, 2</sup> for <span className="text-decoration-underline">existing</span><sup>3, 4</sup> users and supporters.</p>
            <div class="row shop d-flex">
                <div class="col-12 col-lg-6 my-1">
                    <div class="card d-flex" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                        <h3 class="px-2 py-3 mb-3 card-title pzntrk small">Pay for services</h3>
                        <StaticImage src={"../../images/graphics/analytics-plus.png"} alt="A logo representing the idea of a neural network" className="border-bottom border-dark"/>
                        <p className="mx-5 my-4 text-center capsies">Pay for services that were already delivered.</p>
                        <a href="https://buy.stripe.com/eVa16F6XJ6XB8PS4gk" target="_blank" rel="noreferrer noopener" class="btn btn-lg border border-dark col-10 offset-1" role="button">Pay</a>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
               </div>

                <div class="col-12 col-lg-6 my-1">
                    <div class="card d-flex" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
                        <h3 class="px-2 py-3 mb-3 card-title pzntrk small">Pay it forward</h3>
                        <StaticImage src={"../../images/graphics/dev-plus.png"} alt="A logo representing the idea of an explosion of colour and creativity" className="border-bottom border-dark"/>
                        <p className="mx-5 my-4 text-center capsies">Help us produce public resources.</p>
                        <a href="https://buy.stripe.com/28o16Fci381F7LOeUX" target="_blank" rel="noreferrer noopener" class="btn btn-lg border border-dark col-10 offset-1" role="button">Pay</a>
                        <p class="small text-center capsies"><Link to="/terms-conditions">Terms & Conditions</Link></p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <p className="small my-0">1. By using the payment options on this page you accept the applicable sections of our <Link to="/terms-conditions">Terms & Conditions</Link>.</p>
            <p className="small my-0">2. Payments are handled via a third-party (<a href="https://stripe.com" target="_blank" rel="noreferrer noopener">Stripe</a>). You will be redirected to their site after clicking the button.</p>
            <p className="small my-0">3. Payments are final and confirm satisfaction/acceptance with/of services received and/or terms of service already agreed.</p>
            <p className="small my-0">4. You will incur non-refundable fees, and we cannot guarantee availability.</p>
        </Container>
    )
}

export default ProductsComponent