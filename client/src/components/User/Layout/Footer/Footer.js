import React from 'react'
import './Footer.css'

//Images
import aboutUs from '../../../../assets/users.png';
import customerService from '../../../../assets/customer-service.png';
import generator from '../../../../assets/generator.png';

const Footer = () => {
    return (
        <>
            <div id="footer" className="my-5">
            <div className="row">
                <div className="col-md-4 text-center">
                    <div className="p-3 my-2">
                        <a  href="/">
                            <img 
                                src={aboutUs} 
                                alt="About us"
                                height="64"
                                width="61"
                            />   
                        </a>
                        <p className="title">About us</p>
                        <p className="text-muted">
                            Find out how we started, what drives us, and how we’re igniting opportunity.
                        </p>
                        <p className="link">Learn more..</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="p-3 my-2">
                        <a  href="/">
                            <img 
                                src={customerService} 
                                alt="24/7 Customer Support"
                                height="63"
                                width="63"
                            />   
                        </a>
                        <p className="title">24/7 Customer Support</p>
                        <p className="text-muted">A dedicated 24x7 customer
                            support team always at your
                            service to help solve any problem.</p>
                        <p className="link">Learn more..</p>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <div className="p-3 my-2">
                        <a  href="/">
                            <img 
                                src={generator} 
                                alt="Generate Pass"
                                height="61"
                                width="57"
                            />   
                        </a>
                        <p className="title">Generate Pass</p>
                        <p className="text-muted">
                            To travel with the lowest fares, generate pass for a faster travel experience.
                        </p>
                        <p className="link">Learn more..</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
