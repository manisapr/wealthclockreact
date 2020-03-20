import React from "react";



import LayoutIndexFooter from "./Layout/LayoutIndexFooter";

function Home() {
    return (

        <React.Fragment>

    

            <section className="banner home-banr">



                <div className="sld_wldt">




                    <div className="item">
                        <div className="fin_free_back ban_ht">
                            <div className="finfree_in">
                                <div className="finfree_mat">
                                    <h2>Take your first step towards <span>Financial <em>Freedom.</em></span></h2>
                                    <h3>Be an Educated Investor</h3>
                                    <a href="/Wealthclockpicks/Index">Click here to know more</a>
                                </div>
                                <div className="desktop_img">
                                    <img src={require("../images/desktop.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <figure className="how-it-work">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr wow fadeInUp">
                            <h2>How It Works</h2>
                            <p>Easy 4 step process to invest your money</p>
                        </div>

                        <div className="how-it-outr clearfix">
                            <div className="col-lg-3 col-sm-3">
                                <div className="how-it-icn-outr">
                                    <div className="how-it-num wow fadeInDown" data-wow-delay="0.5s">1</div>
                                    <div className="how-it-icn-inn">
                                        <div className="how-it-icn wow fadeInUp" data-wow-delay="0.5s"><img src={require("../images/how-it-icn1.png")} alt="" /></div>
                                        <div className="how-it-icn-des">
                                            <p>Get Started With<br />Wealthclock</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="how-it-icn-outr">
                                    <div className="how-it-num wow fadeInDown" data-wow-delay="1s">2</div>
                                    <div className="how-it-icn-inn">
                                        <div className="how-it-icn wow fadeInUp" data-wow-delay="1s"><img src={require("../images/how-it-icn2.png")} alt="" /></div>
                                        <div className="how-it-icn-des">
                                            <p>Complete your <br />KYC</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="how-it-icn-outr">
                                    <div className="how-it-num wow fadeInDown" data-wow-delay="1.5s">3</div>
                                    <div className="how-it-icn-inn">
                                        <div className="how-it-icn wow fadeInUp" data-wow-delay="1.5s"><img src={require("../images/how-it-icn3.png")} alt="" /></div>
                                        <div className="how-it-icn-des">
                                            <p>Choose the Right Fund</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-3">
                                <div className="how-it-icn-outr">
                                    <div className="how-it-num wow fadeInDown" data-wow-delay="2s">4</div>
                                    <div className="how-it-icn-inn">
                                        <div className="how-it-icn wow fadeInUp" data-wow-delay="2s"><img src={require("../images/how-it-icn4.png")} alt="" /></div>
                                        <div className="how-it-icn-des">
                                            <p>Achieve Your<br /> Goal</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="start-your clearfix">
                            <h3>Start Your Planning Now!</h3>
                            <a href="/Account/Registration.html" className="get-started">Get Started</a>
                        </div>

                    </div>
                </div>
            </figure>


            <section className="range_invst_sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr blue-txt wow fadeInUp">
                            <h2>At First Compare, Then Decide.</h2>
                            <p>Where Should You Invest ?</p>
                        </div>
                        <div className="range-slider-outr wow">
                            <div className="range_sec_inner">
                                <div className="range_slide_contents">
                                    <div className="range_lft">
                                        <div className="range_lft_inr">
                                            <div className="range_slide_txt">
                                                <p><i className="fa fa-inr" aria-hidden="true"></i><span>5000k</span></p>
                                                <p><i className="fa fa-inr" aria-hidden="true"></i><span>1000k</span></p>
                                                <p><i className="fa fa-inr" aria-hidden="true"></i><span>50,000</span></p>
                                            </div>
                                            <div className="range_slide">
                                                <div id="range_slider_vertical"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="range_rgt">
                                        <div className="soft_progress_outr">
                                            <div className="progress vertical">
                                                <div className="progress-bar progress-bar-info" role="progressbar" id="idFixedDeposit" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ maxheight: '34%' }}>
                                                    <div className="progress_content">
                                                        <h4 id="idFDAmount">1.2Cr</h4>
                                                        <p><span>Fixed deposit</span>5.95% after taxes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress vertical">
                                                <div className="progress-bar progress-bar-info prg_bar_2" id="idGold" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ maxheight: '46%' }}>
                                                    <div className="progress_content">
                                                        <h4 id="idGoldAmount">R.S 151856545</h4>
                                                        <p><span>Gold</span>7.85% after taxes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress vertical">
                                                <div className="progress-bar progress-bar-info prg_bar_3" id="idSensex" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ maxheight: '80%' }}>
                                                    <div className="progress_content">
                                                        <h4 id="idSensexAmount">1.9Cr</h4>
                                                        <p><span>Sensex</span>14% after taxes</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress vertical">
                                                <div className="progress-bar progress-bar-info max-bar prg_bar_4" id="idWealthclock" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ maxheight: '100%' }}>
                                                    <div className="progress_content">
                                                        <h4 id="idWCAmount">2 cr</h4>
                                                        <p><span>Wealthclock</span>17% after taxes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="range_value_app">
                                    <span><i className="fa fa-inr" aria-hidden="true"></i></span>

                                    <span>invested</span>
                                    <span>
                                        <select className="" id="choosenAmountTime" style={{ width: '95px' }}>
                                            <option value="0" select="true">just once</option>
                                            <option value="1">every month</option>
                                        </select>
                                    </span><span>for</span>
                                    <span>
                                        <select name="" id="moneyCompareYear">
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="5">05</option>
                                            <option value="10">10</option>
                                            <option value="30" select="true">30</option>
                                        </select>years
                        </span>
                                </div>
                            </div>
                        </div>

                        <div className="comm-btn-outr">
                            <a href="https://www.wealthclockadvisors.com/Account/login" className="commn-btn">Start Your Knowledge Investing Today</a>
                        </div>

                    </div>
                </div>
            </section>


            <figure className="sophiticated-sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr wht-txt wow fadeInUp">
                            <h2>Our investment strategies may be <br />sophisticated, but our philosophy is simple</h2>
                        </div>

                        <div className="strategies-outr clearfix">
                            <div className="col-lg-4 col-sm-4">
                                <div className="investing-outr">
                                    <div className="stratigie-icn wow fadeInDown" data-wow-delay="0.5s"><img src={require("../images/investment-icn1.png")} alt="" /></div>
                                    <div className="stratagies-des">
                                        <h3>Managing your risk</h3>
                                        <p>Your investments should reflect the risk you�re willing to take. We'll create a diversified portfolio and keep it balanced for your risk tolerance.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-4">
                                <div className="investing-outr">
                                    <div className="stratigie-icn wow fadeInDown" data-wow-delay="1s"><img src={require("../images/investment-icn2.png")} alt="" /></div>
                                    <div className="stratagies-des">
                                        <h3>Increasing Efficiencies</h3>
                                        <p>Our combination of human touch and algorithm makes sure that you are always on top of your wealth. Tis feature tries to put every rupee of yours to work. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                <div className="investing-outr">
                                    <div className="stratigie-icn wow fadeInDown" data-wow-delay="1.5s"><img src={require("../images/investment-icn3.png")} alt="" /></div>
                                    <div className="stratagies-des">
                                        <h3>Generating Returns</h3>
                                        <p>Our main focus is helping you increase your returns But that doesn't mean we chase the market. </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="comm-btn-outr">
                            <a href="/Account/login.html" className="commn-btn">Start Your Investment</a>
                        </div>
                    </div>
                </div>
            </figure>

            <figure className="your-money-sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr wow fadeInUp">
                            <h2>Your Money Is Safe & Secure</h2>
                        </div>

                        <div className="your-money-outr">
                            <div className="col-lg-6 col-sm-6">
                                <div className="famiy-pic"><img src={require("../images/family-pic.png")} alt="" /></div>
                            </div>
                            <div className="col-lg-offset-1 col-sm-offset-1 col-lg-5 col-sm-5">
                                <div className="hexagon-outr">
                                    <div className="hexa-innr wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="hexa-pic-outr">
                                            <div className="hexa-pic">
                                                <span><img src={require("../images/secure-icn1.png")} alt="" />  </span>
                                            </div>
                                        </div>
                                        <div className="hexa-des">
                                            <h3>Withdraw Anytime</h3>

                                        </div>
                                    </div>

                                    <div className="hexa-innr wow fadeInUp" data-wow-delay="1s">
                                        <div className="hexa-pic-outr">
                                            <div className="hexa-pic">
                                                <span><img src={require("../images/secure-icn2.png")} alt="" />  </span>
                                            </div>
                                        </div>
                                        <div className="hexa-des">
                                            <h3>Safe & Secure</h3>

                                        </div>
                                    </div>
                                    <div className="hexa-innr wow fadeInUp" data-wow-delay="1.5s">
                                        <div className="hexa-pic-outr">
                                            <div className="hexa-pic">
                                                <span><img src={require("../images/secure-icn3.png")} alt="" />  </span>
                                            </div>
                                        </div>
                                        <div className="hexa-des">
                                            <h3>Paperless & Flexible</h3>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>

            <figure className="highest-invst-sec">
                <div className="container">
                    <div className="highest-invst-inn clearfix">
                        <div className="highest-invst-bach">
                            <div className="yellow-bach">
                                <img src={require("../images/yellow-bach.png")} alt="" />
                            </div>
                        </div>
                        <div className="highest-invst-person">
                            <h3>Highest Amount Invested By Single Customer</h3>

                        </div>
                    </div>
                </div>
            </figure>


            <section className="faq_sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr wow fadeInUp">
                            <h2>Frequently Asked Questions</h2>
                            <p>Find out your solutions here!</p>
                        </div>
                        <div className="accordiam-bx">

                            <div className="accordian-left">

                                <div className="accordion">
                                    <h1>What Is Mutual Fund?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>Mutual funds are an investment product where a pool of money is collected from various sections of the people(including you) by an Asset Management Company investing in Shares of the companies, Bonds, FD's of private and government companies managed collectively by a fund manager to earn highest possible returns </p>
                                        </div>
                                    </div>
                                    <h1>Are Mutual Funds regulated in India?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>All mutual funds are registered with SEBI (Securities Exchange Board of India) and therefore, quite safe though they have the market risk inherited in them </p>
                                        </div>
                                    </div>
                                    <h1>Why Mutual Funds?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>Mutual funds offers various features and benefits such as Expert Money Management, Diversification, Systematic Investment Planning, Tax Benefit, Low Cost, Investments based on goals & focus sector as an investment method, hence making it the most lucrative investment option </p>
                                        </div>
                                    </div>
                                    <h1>How to Invest?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>There are two ways of investing, the traditional method of paper investing or the digital way. We at Wealthclock prefer the digital way as saves a lot of time and cost efficiencies </p>
                                        </div>
                                    </div>
                                    <h1>How can Wealthclock Advisors help me with the investment process?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>Think of us as your personal trainer that play a crucial role in keeping you focused on reaching your goals with confidence. With Wealthclock you are assured better results as opposed to doing it alone. We will guide you and caution you about the market to ensure you get the best results</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="accordian-right">
                                <div className="accordion">
                                    <h1>What are SIPs?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>SIPs are Systematic Investment Plans where money is deducted from your bank account and invested automatically. With an SIP, you're able to purchase fund units at different levels of the market and benefit from rupee cost averaging. </p>
                                        </div>
                                    </div>
                                    <h1>How to redeem the investment? </h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>You can withdraw your investments anytime from your Wealthclock Investment Dashboard. After redemption, the money is usually transferred to your registered bank account directly in 3 working days. Tax saving funds (ELSS) have a 3 year lock-in after which you can redeem. </p>
                                        </div>
                                    </div>

                                    <h1>Can I track my portfolio performance?</h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>The Wealthclock portal shows you the status of all your investments in real time. Browse through your detailed investment reports with a smart tag to your financial goals and stay in complete control of your money and dreams. </p>
                                        </div>
                                    </div>
                                    <h1>Can I add my Family members account also? </h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>Yes not only you can add but you can also track the consolidated performance of the family members of a complete overview of the investments </p>
                                        </div>
                                    </div>
                                    <h1>How Investing from Mutual Funds different from Direct Stock Investing ? </h1>
                                    <div>
                                        <div className="faq-inne-des clearfix">
                                            <p>There is a very thin difference between the two. Investments in Mutual Funds are spread across a wide cross-section of industries and sectors and thus the risk is diversified because all stocks may not move in the same direction in the same proportion at the same time as compared to investing directly in few stocks </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="expert-sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr blue-txt wow fadeInUp">
                            <h2>Want To Know Little More?</h2>
                            <p>If you are not sure, please read following points.</p>
                        </div>

                        <div className="expert-slider">
                            <div className="item">
                                <div className="expert-tbl">
                                    <div className="expert-cell">
                                        <img src={require("../images/prof-pic02.png")} alt="" />
                                    </div>
                                    <div className="expert-txt">
                                        <h4>What we do for you</h4>
                                        <p>
                                            Think of us as your personal trainer that play a crucial role in keeping you focused on reaching your goals with confidence. With Wealthclock you are assured better results as opposed to doing it alone. We will guide you and caution you about the market to ensure you get the best results.
                            </p>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="expert-tbl">
                                    <div className="expert-cell">
                                        <img src={require("../images/prof-pic05.png")} alt="" />
                                    </div>
                                    <div className="expert-txt">
                                        <h4>Track and Manage effortlessly </h4>
                                        <p>
                                            The Wealthclock portal shows you the status of all your investments in real time. Browse through your detailed investment reports with a smart tag to your financial goals and stay in complete control of your money and dreams.

                            </p>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="expert-tbl">
                                    <div className="expert-cell">
                                        <img src={require("../images/prof-pic07.png")} alt="" />
                                    </div>
                                    <div className="expert-txt">
                                        <h4>A Smart and Secure investing experience</h4>
                                        <p>
                                            We have collobrated with industry leading Exchange BSE and best Asset Management companies to facilitate your transactions. We use state of the art database encryption and SSL protocols to ensure data security. Save More. Worry Less.
                            </p>
                                    </div>
                                </div>
                            </div>


                            <div className="item">
                                <div className="expert-tbl">
                                    <div className="expert-cell">
                                        <img src={require("../images/expert-slide1.png")} alt="" />
                                    </div>
                                    <div className="expert-txt">
                                        <h4>Our Process </h4>
                                        <p>
                                            There is no 'one size fits all' solution for financial planning-our services are personalized keeping all your needs in mind. We understand that every user has different reasons for investing. Some may want to invest for a house, for a holiday or simply to park their surplus funds for short or long term. All these users have different risk appetites, ideal holding period and periodicity of investment.
                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-partner-sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr wht-txt wow fadeInUp">
                            <h2>Our Strong & Reliable Partner</h2>
                        </div>


                        <div id="exTab1">
                            <ul className="nav nav-pills">
                                <li className="active">
                                    <a href="#1a" data-toggle="tab">Fund Partners</a>
                                </li>
                                <li>
                                    <a href="#2a" data-toggle="tab">Other Partners</a>
                                </li>

                            </ul>

                            <div className="tab-content clearfix">
                                <div className="tab-pane active" id="1a">
                                    <div className="partner-slider">
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/SbiLogo.jpg")} alt="SbiLogo.jpg" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/franklin.png")} alt="franklin.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/canara.png")} alt="canara.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/DSP-Blakrock-logo.png")} alt="DSP-Blakrock-logo.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/BNP-Paribas-Mutual-Fund.png")} alt="BNP-Paribas-Mutual-Fund.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/Birla-Sun-Life-Mutual-Fund.png")} alt="Birla-Sun-Life-Mutual-Fund.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/Axis-Mutual-Fund-01.png")} alt="Axis-Mutual-Fund-01.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/Reliance_Mutual_Fund_Logo.png")} alt="Reliance_Mutual_Fund_Logo.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/kotak.png")} alt="kotak.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/hdfclogo.jpg")} alt="hdfclogo.jpeg" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/icici.jpg")} alt="icici.jpg" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/MiraeAssetMutualFund.jpg")} alt="MiraeAssetMutualFund.jpg" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/IDFCMUTUALFUND.jpg")} alt="IDFCMUTUALFUND.jpg" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/LT.png")} alt="LT.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/dhfl.jpg")} alt="dhfl.jpg" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/Sundarm.png")} alt="Sundarm.png" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="2a">
                                    <div className="partner-slider">
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/BombayStockExchangelogo.png")} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/ShareKhanLogo.jpg")} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/RRFinance_Logo.jpg")} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/Ak_Logo.jpg")} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/New_Ass_Logo.png")} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a>
                                                <div className="our-partner-inn">
                                                    <div className="our-partner-cell">
                                                        <img src={require("../Adminimages/LIC_LOGO.png")} alt="" />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>


                            <div className="comm-btn-outr">
                                <a href="/Contactus" className="commn-btn">Become A Partner</a>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section className="testimonial_sec">
                <div className="comn-outr">
                    <div className="container">
                        <div className="comm-hdr wow fadeInUp">
                            <h2>What Our People Says</h2>
                        </div>
                        <div className="testimonial_inner">
                            <div className="textimonial_slider_for">
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>I am very happy with services provided by wealthclock. For business man wealth management is very important and to manage alone is difficult but wealthclock team helps me alot. Thank you so much team and all the very best.</p>
                                        </div>
                                        <h4>-Arpit  Jain</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Amazing platform for buying mutual fund online. As simple as it can get.</p>
                                        </div>
                                        <h4>-Harshal Malbari</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Before Wealthclock Advisors, I used to spend a lot of time surfing about funds and ultimately confusing myself which is the appropriate one for me. But now all i do is invest and forget it.</p>
                                        </div>
                                        <h4>-Kajal Lalwani</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Got unbiased personalized portfolio advice that was aligned to my needs and interest. The investment portfolio was designed to get optimal returns as per my risk profile. Very happy that I started investment through Wealthclock Advisors.</p>
                                        </div>
                                        <h4>-Nikita Dadia</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Wealthclock Advisors have the correct mix of Robo-Advisory and the much-needed Human touch.</p>
                                        </div>
                                        <h4>-Sachin Somiya</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Wealthclock Advisors dashboard is an innovative web application it really makes life simple to track all my investments at one place. I was frustrated with multiple login for my investments in different AMCs. Investing is simple now.</p>
                                        </div>
                                        <h4>-Ankit Sanghvi</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Wealthclock Advisors is an excellent product that is serviced by an excellent team. Every time, I've needed any help, the team has been prompt in getting back to me even if it's a holiday. I'm very impressed.</p>
                                        </div>
                                        <h4>-Kevin Mendonca</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>One has to try the Goal Tracker feature which Wealthclock offers, I was really impressed with the visual interface of the goal tracker which provides a 360-degree view of all the planned goal.</p>
                                        </div>
                                        <h4>-Sapna Jain</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>I would like to appreciate your good work and the endless hours of service that you and your company have dedicated to my Financial Portfolio. I appreciate your positive attitude and your ability to motivate people for their Financial needs.</p>
                                        </div>
                                        <h4>-Siddhanth Jain</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimonial_details">
                                        <div className="testimonial_txt">
                                            <p>Engineers are known be bad when it comes to money matters. I was no different until I meet with Wealthclock Advisors. They helped me plan mine as well as my family's future better Wealthclock Advisors team made me wiser in financial planning and investments.</p>
                                        </div>
                                        <h4>-Yashraj Thakur</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="textimonial_slider_nav">
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/no-image-male.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img1.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img2.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img3.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img4.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img5.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img6.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img7.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testi_img circle">
                                        <div className="img_wrap">
                                            <img src={require("../Adminimages/TM_Img8.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="text-center">
                <div className="ui-loader ui-loader-default hide">
                    <span className="ui-icon ui-icon-loading"></span>
                </div>
            </div>


            <LayoutIndexFooter />


        </React.Fragment >

        );
}
            
           
export default Home;

            
  

        


            


  
        
     
        
        
        

           







