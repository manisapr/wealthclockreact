import React from 'react';




import LayoutAboutFooter from './Layout/LayoutAboutFooter';

function About() {
    return (
        <React.Fragment>

   
            <section className="bannr-sec about-us">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>About us</h1>

                        </div>
                    </div>
                </div>


                <div className="ng-scope" id="content-view">
                    <div style={{ display: 'block' }} className="ng-scope" id="mouse-scroll">
                        <div><span className="unu"> </span> <span className="doi"> </span> <span className="trei"> </span> </div>
                    </div>
                </div>

            </section>


            <section className="hm long-term text-center">
                <div className="container">
                    <div className="long-outr commn-outr">
                        <p>
                            Wealthclock Advisors was established to provide financial solutions that resonate with the modern trend of shifting the role of a wealth manager from banks to specialized wealth management companies. Our targeted approach of putting our clients' needs first helps us build a relationship with them which embodies the traditional values of client confidentiality and discretion, whilst simultaneously ensuring the growth of our clients' wealth.
                        </p>

                    </div>
                </div>
            </section>

            <figure className="tab-sec wow fadeInUp">
                <div className="container">
                    <div className="commn-outr">
                        <ul className="nav nav-tabs responsive">
                            <li className="active"><a data-toggle="tab" href="#menu1">Overview</a></li>
                            <li><a data-toggle="tab" href="#menu2">Company values</a></li>
                            <li><a data-toggle="tab" href="#menu3">What Clients Expect from us</a></li>
                            <li><a data-toggle="tab" href="#menu4">What makes us different</a></li>
                        </ul>
                        <div className="tab-content responsive">
                            <div id="menu1" className="tab-pane fade in active">

                                <p>
                                    We at Wealthclock understand that the biggest dilemma faced by any investor is that of "Choice Overload". Often, too many choices tend to exhaust us and lead us to sometimes abscond from making a decision all together. We believe that this is a primary reason for many first time investors to delay or shy away from investing their hard earned money. Hence, we make it our goal to avoid this predicament by providing precise information and appurtenant solutions to all our clients through algorithm backed research and an active understanding of the markets.
                    </p>
                                <p>
                                    As financial advisors, we provide comprehensive wealth management, financial planning, and investment management services to individuals, families, trusts, and businesses alike.
                                    We take an objective, unbiased approach to financial advisory, tailoring each unique plan to work toward individual needs, expectations and ambitions.
                    </p>
                            </div>

                            <div id="menu2" className="tab-pane fade">

                                <p>
                                    Our clients are the very foundation of our business. As advisors, our biggest asset is our ability to service our clients by adding a personal touch to each interaction.By virtue of being counselors, we place our clients’ interests ahead of our own.
                    </p>
                                <p>
                                    Financial planning makes a real difference, both qualitatively and quantitatively, in our lives.We believe that our financial planning process adds to the bottom line by helping clients control spending, increase savings, and reduce taxes.
                    </p>
                            </div>
                            <div id="menu3" className="tab-pane fade">

                                <p>
                                    <strong>Integrity:</strong>
                                    We approach our clients' financial needs and investment options with objective integrity: we place our clients’ best interests first by providing unbiased and uncorrupted information which will help them achieve their financial goals.
                    </p>
                                <p>
                                    <strong>Strategy:</strong>
                                    Our strategy is very simple : Preservation of capital first, with a striving for returns secondary. We at Wealthclock understand the value of your hard earned money and consider each paisa lost by any of our clients as a personal loss to the company.
                    </p>
                                <p>
                                    <strong>Precision:</strong>
                                    In an industry which is rapidly evolving with highly volatile markets and unpredictable outcomes, We at wealthclock pride ourselves in providing precise advice tailor made for each individual entity. We filter out the options that we deem unsuitable for our clients and provide them with opportunities that are a "perfect fit".
                    </p>
                                <p>
                                    <strong>Security:</strong>
                                    Our clients trust us with valuable information of a highly personal nature.We make it our top priority to ensure safety of our clients by adding extra layers of security measures to all transactions. Moreover, we guarantee complete confidentiality towards the information shared by you on this website.
                    </p>
                            </div>
                            <div id="menu4" className="tab-pane fade">
                                <div className="diff-sec">
                                    <div className="diff">
                                        <img src={require("../images/fiduciary.png")} alt="" />
                                        <h4>Fiduciary</h4>
                                        <p>
                                            As a fiduciary, we are obligated to put you -our client-first. We feel this sets us apart from other types of firms in the securities industry such as brokers/dealers that may be held to a perhaps lesser, "suitability" standard.
                            </p>
                                    </div>

                                    <div className="diff">
                                        <img src={require("../images/accible.png")} alt="" />
                                        <h4>Accessible</h4>
                                        <p>
                                            Our clients are busy, and we respect their time. We work around our clients schedule which means meeting after work or on weekends. Wealthclock is available to meet virtually or in-person.
                            </p>
                                    </div>

                                    <div className="diff">
                                        <img src={require("../images/plan.png")} alt="" />
                                        <h4>Plan</h4>
                                        <p>
                                            We believe in end to end planning. We make no recommendations without first understanding your needs. We use the information provided by you to develop a plan that is geared to help you achieve your goals.
                            </p>
                                    </div>

                                    <div className="diff">
                                        <img src={require("../images/modern.png")} alt="" />
                                        <h4>Modern</h4>
                                        <p>
                                            We use state of the art financial planning and communication tools to help bring information to you efficiently and securely. Wealthclock Advisors believes in trying to be as paperless as possible.
                            </p>
                                    </div>

                                    <div className="diff">
                                        <img src={require("../images/holistic.png")} alt="" />
                                        <h4>Holistic Approach</h4>
                                        <p>
                                            We don't start talking about money. We get to know who you are first by understanding the four key areas of your life-family, profession, goals and financial resources. We make sure that these four areas are in-line with your financial plan.
                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>


            <LayoutAboutFooter/>


        </React.Fragment>
    );
}

            


        
        

export default About;
            

        



    