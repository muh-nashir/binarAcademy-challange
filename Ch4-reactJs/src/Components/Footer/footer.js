import React from 'react'

import style from './footer.module.css'

const footer = () => {
    return (
        <>
        <div className="footer">
            <div class="container">
                <div class="row">
                    <div class="info-desc col-lg-6">
                        <div class="row">
                            <div class="col-7">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p>binarcarrental@gmail.com</p>
                                <p>081-233-334-808</p>
                            </div>
                            <div class="col-4">
                                <p>Our services</p>
                                <p>Why Us</p>
                                <p>Testimonial</p>
                                <p>FAQ</p>
                            </div>
                        </div>
                    </div>
                    <div class="info-contact col-lg-6">
                        <div class="row">
                            <div class="col-7">
                                <p>Connect with us</p>
                                <img src="./images/socmed.png" alt="Socmed" />
                            </div>
                            <div class="col-4">
                                <p>Copyright Binar 2022</p>
                                <img src="./images/logo.png" alt="Logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default footer
