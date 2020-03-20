import React from 'react';



import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function Solution() {
    return (
        <React.Fragment>
     

            <section className="bannr-sec solution-bannr">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>Solutions</h1>
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
                            Our comprehensive private wealth management services provide our clients the freedom to pursue their dreams and delegate the less interesting task of managing their wealth, to us. Armed with extensive experience and pinpoint precision, we provide our clients with efficient solutions to a wide range of problems.
            </p>
                    </div>
                </div>
            </section>
            <section className="sol-sec">
                <div className="seperate-sec">
                    <img src={require("../images/financial-bg1.jpg")} alt="" />
                    <div className="seperate-outr">
                        <div className="container">
                            <div className="seperate-innr wow fadeInRight" data-wow-delay="0.5s">
                                <div className="seperate-pic">
                                    <div className="seperate-pic-innr">
                                        <img src={require("../images/finance-icon.png")} alt="" />
                                    </div>
                                </div>
                                <div className="seperate-txt">
                                    <h5>Financial Planning</h5>
                                    <p>
                                        Different people have different financial and investment goals. The goal for some is to save away for a rainy day, while others might seek to build a retirement savings nest egg. Partnering with Wealthclock Advisors ensures that no matter what your goal is, you will have the best picks of a myriad of financial products to take your financial and investment plans to the next level.
                        </p>
                                    <a className="commn-bttn whte" href="/FinancialPlanning">learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="seperate-sec">
                    <img src={require("../images/goal-bg1.jpg")} alt="" />
                    <div className="seperate-outr">
                        <div className="container">
                            <div className="seperate-innr wow fadeInLeft" data-wow-delay="0.5s">
                                <div className="seperate-pic">
                                    <div className="seperate-pic-innr">
                                        <img src={require("../images/goal-icon.png")} alt="" />
                                    </div>
                                </div>
                                <div className="seperate-txt">
                                    <h5>Goal Planning</h5>
                                    <p>
                                        Most people don't bother to set goals and subconsciously rely on luck to fulfill their dreams. Goals-based planning allows for a combined, coordinated and organized route to your shot at achieving essential goals that go well beyond the cliched "Retirement Fund" and "Rainy-day Fund" goals.
                        </p>
                                    <a className="commn-bttn" href="/GoalPlanning">learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="seperate-sec">
                    <img src={require("../images/investing-bg1.jpg")} alt="" />
                    <div className="seperate-outr">
                        <div className="container">
                            <div className="seperate-innr wow fadeInRight" data-wow-delay="0.5s">
                                <div className="seperate-pic">
                                    <div className="seperate-pic-innr">
                                        <img src={require("../images/invest-icon.png")} alt="" />
                                    </div>
                                </div>
                                <div className="seperate-txt">
                                    <h5>Retirement Planning</h5>
                                    <p>
                                        Retirement planning is one of the most common forms of financial planning and even the most happy-go-lucky people in the world have at some point considered the idea of planning for life after retirement. It involves the consideration of a number of factors such as the age of retirement, the amount of money one will need to cover the living expenses, the lifestyle he/she plans to have once they have retired, and so on.
                        </p>
                                    <a className="commn-bttn whte" href="/RetirementPlanning">learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="seperate-sec">
                    <img src={require("../images/tax-bg1.jpg")} alt="" />
                    <div className="seperate-outr">
                        <div className="container">
                            <div className="seperate-innr wow fadeInLeft" data-wow-delay="0.5s">
                                <div className="seperate-pic">
                                    <div className="seperate-pic-innr">
                                        <img src={require("../images/tax-icon.png")} alt="" />
                                    </div>
                                </div>
                                <div className="seperate-txt">
                                    <h5>Tax Planning</h5>
                                    <p>
                                        The purpose of tax planning is to ensure tax efficiency. Most people handle their taxes in a reactive manner rather than a proactive effort. Taxes being an integral part of your financial planning, all the elements of your financial plan should work together in the most tax-efficient manner possible, to maximize your after tax returns.
                        </p>
                                    <a className="commn-bttn" href="/TaxPlanning">learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <LayoutAboutFooter/>
        </React.Fragment>

    );
}
export default Solution;
