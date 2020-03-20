import React from 'react';


function LayoutSIPFooter() {
    return (
        <React.Fragment>

            <section className="ftr-sec">
                <div className="container">
                    <div className="commn-outr clearfix">
                        <div className="row">
                            <div className="col-sm-4 col-xs-6">
                                <div className="ftr-inn">
                                    <h5>about us</h5>
                                    <p>
                                        Wealthclock makes investing simple, safe and convenient. We offer mutual fund investment and financial markets advisory over the friendly and interactive online platform that makes investing fun for all first-time investors. With the help of advance tools, detailed market analysis and team of expert advisors, Wealthclock ensures that the users are on top of their game. Come and watch your investment grow.
                            </p>
                                </div>
                            </div>

                            <div className="col-sm-3 col-xs-6">
                                <div className="ftr-inn xtra">
                                    <h5>important links</h5>
                                    <ul>
                                        <li>
                                            <a href="/AboutUs/Index">- About Us</a>
                                        </li>
                                        <li>
                                            <a href="/AboutUs/HowItWorks">- How It Works</a>
                                        </li>
                                        <li>
                                            <a href="/AboutUs/WhyUs">- Why Us</a>
                                        </li>
                                        <li>
                                            <a href="/Solutions/Index">- Solutions</a>
                                        </li>
                                        <li>
                                            <a href="/WealthclockPicks/Index">- Wealthclock Picks</a>
                                        </li>
                                        <li>
                                            <a href="/MoneyTools/Index">- Money Tools</a>
                                        </li>
                                        <li>
                                            <a href="/Insights/Index">- Insights</a>
                                        </li>
                                        <li>
                                            <a href="/ContactUs/Index">- Contact us</a>
                                        </li >
                                        <li>
                                            <a href="/DownloadForm/index">- Download Forms</a>

                                        </li >
                                        <li>
                                            <a href="/DownloadForm/Ebook">- Ebooks</a>

                                        </li >
                                    </ul >
                                </div >
                            </div >

                            <div className="col-sm-3 col-xs-6">
                                <div className="ftr-inn xtra-rght">
                                    <h5>contact details</h5>
                                    <div className="ftr-add">
                                        <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
                                        <p>
                                            Wealthclock Advisors, Manish<br /> Mahal, Off Veera Desai Road, <br />Jeevan Nagar, Andheri West, <br />Mumbai - 400053 Maharashtra

                                </p>
                                    </div>
                                    <div className="ftr-add">
                                        <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                                        <a href="tel:+9112345678"> +91 9702233617 </a>
                                    </div>
                                    <div className="ftr-add">
                                        <span><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                                        <a href="mailto:contact@wealthclock.com "> contact@wealthclock.com </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-2 col-xs-6">
                                <div className="ftr-inn">
                                    <h5>get in touch</h5>
                                    <a href="https://www.facebook.com/wealthclock/" className="social">
                                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                        <p>facebook</p>
                                    </a>
                                    <a href="https://twitter.com/wealthclock?lang=en" className="social">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                        <p>twitter</p>
                                    </a>
                                    <a href="https://www.linkedin.com/company/wealthclockadvisors" className="social">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                        <p>LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
            <section className="ftr-sec-new">
                <div className="container">
                    <div className="certify-inn">
                        <div className="certify-cell">
                            <div className="certify-image">
                                <a href="https://www.amfiindia.com/" target="_blank" className="certify-image">
                                    <img src={require("../images/AMFI-Logo.png")} alt="" width="60" />
                                </a>
                            </div>
                            <p>
                                ASSOCIATION OF MUTUAL FUNDS OF INDIA<br />REGISTERED MUTUAL FUND DISTRIBUTOR <br />ARN:115995
                    </p>
                        </div>
                        <div className="certify-cell">
                            <div className="certify-image">
                                <a href="https://www.bseindia.com/" target="_blank" className="certify-image">
                                    <img src={require("../images/Bombay_Stock_Exchange_logo.png")} alt="" width="100" />
                                </a>
                            </div>
                            <p>
                                BSE REGISTERED MUTUAL FUND <br />DISTRIBUTOR MUTUAL FUND <br />CODE NO:11946
                    </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="ftr-outr clearfix">
                        <h6>Disclaimer</h6>
                        <p>
                            Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing. Past performance is not indicative of future returns. Please consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your needs
                </p>
                        <p>Wealthclock Advisors with ARN code 115995 makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Terms and conditions of the website are applicable. </p>
                    </div>
                    <div className="ftr-copy">
                        <p>2019 Copyright &copy; <a href="/Home/Index">Wealth Clock</a>. All rights reserved.</p>
                        <ul>
                            <li>
                                <a href="/Home/PrivacyPolicy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/Home/TermsAndConditions">Terms &amp; Condition</a>
                            </li>
                            <li>
                                <a href="/Home/Disclosure">Disclosure</a>
                            </li>
                        </ul >
                    </div >
                </div >
            </footer >


        </React.Fragment>
        );
}
export default LayoutSIPFooter;
            







              



