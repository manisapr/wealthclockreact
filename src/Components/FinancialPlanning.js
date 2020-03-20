import React from 'react';

import LayoutAboutFooter from './Layout/LayoutAboutFooter';

function FinancialPlanning() {
    return (
        <React.Fragment>

            <section className="bannr-sec finance">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>Financial Planning</h1>

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
                            Financial planning is a very broad term and includes even the little decisions we make in everyday life to manage our finances such as deciding to take a taxi or a bus, to cook or order in. Long term as well as short term financial planning from an early age is crucial for a secure future. We at Wealthclock help you make your very own financial plan for your secure future.
                        </p>

                    </div>
                </div>
            </section>

            <section className="why-us-sec wow fadeInUp clearfix">
                <div className="commn-outr financial-sec">
                    <div className="container">
                        <div className="why-txt">
                            <p>

                                Financial planning is the process of understanding ones current income and identifying investment options keeping in mind estimates for future income and expenditure. Simply put it is the act of setting aside money today for the expected and unexpected expenditures of tomorrow.

                </p>
                            <p>

                                Financial planning is not just about the money. It also looks at ones habits, priorities and nature. Often it's personal values that take precedence -such as wasteful spending tendencies, force of habit and a general unwillingness to save today for tomorrow will have a direct impact on how you manageyour money. Your financial plan has to take all your habits in mind and build a viable plan.
                </p>

                            <p>
                                Working with an independently owned financial planning firm allows you to explore a range of potential products and services and how they may benefit you. Strategies can be specifically targeted towards the goals that are most important to you, such as retirement and rainy-day funds.
                </p>
                            <p>
                                Financial Planning requires a forensic approach to investigating your financial risks and opportunities. Here at wealthclock,we insist on learning all about you before aligning the appropriate financial services, strategies and structures to your unique situation and personal goals.
                </p>
                        </div>
                        <div className="why-pic">
                            <img src={require("../images/financial-plan.png")} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <figure className="financial-tab wow fadeInUp clearfix">
                <div className="container">
                    <div className="commn-outr">
                        <ul className="nav nav-tabs responsive">
                            <li className="active"><a data-toggle="tab" href="#menu1">Appraise</a></li>
                            <li><a data-toggle="tab" href="#menu2">Goals</a></li>
                            <li><a data-toggle="tab" href="#menu3">Strategy</a></li>

                            <li><a data-toggle="tab" href="#menu5">Balance</a></li>
                        </ul>
                        <div className="tab-content responsive">
                            <div id="menu1" className="tab-pane fade in active">
                                <div className="financial-outr">
                                    <div className="financial-txt">
                                        <p>
                                            We take stock of the present financial position to answer the question 'Where do we stand today'. Whats the current income and expense, what is the sum saved so far, what is the current value of investments and the potential of the current investments.
                            </p>

                                    </div>
                                    <div className="fianancial-graph">
                                        <img src={require("../images/financial-graph.png")} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div id="menu2" className="tab-pane fade">
                                <div className="financial-outr">
                                    <div className="financial-txt">
                                        <p>
                                            Clear identification of your goal will help developing a plan to achieve it. Assessing and prioritizing your goals will help identify cost of goals and how to invest today to achieve it.
                            </p>

                                    </div>
                                    <div className="fianancial-graph">
                                        <img src={require("../images/Goal.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div id="menu3" className="tab-pane fade">
                                <div className="financial-outr">
                                    <div className="financial-txt">
                                        <p>
                                            We develop a plan of investment for you to achieve your goals. We capitalize on your strengths and provide solutions to improve returns from underperforming investments.
                            </p>


                                    </div>
                                    <div className="fianancial-graph">
                                        <img src={require("../images/strategy.png")} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div id="menu5" className="tab-pane fade">
                                <div className="financial-outr">
                                    <div className="financial-txt">
                                        <p>
                                            Goals and strategies must be in sync with performance of investments and affordability. A balance must be sought between the income projections, ready cash flow and risk appetite. The idea is to make investing a comfortable exercise that achieves the goals within time without compromising today.
                            </p>

                                    </div>
                                    <div className="fianancial-graph">
                                        <img src={require("../images/balance.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>

            <article className="finance-brief wow fadeInUp">
                <div className="container">
                    <div className="finance-brief-inn">
                        <p>
                            <strong>No two financial plans are exactly the same.</strong> That's why seeking financial advice is so important. According to the
                            Industry Research, 50% of India's are concerned they do not have enough money to retire on. In our experience,
                            we also know that those who do have enough, are keen to ensure the money they have lasts throughout retirement
                            and can be transferred safely to the next generation.
            </p>
                        <p>
                            Our financial planners offer services to those who are simply trying to improve their current wealth position and secure their future.
            </p>
                    </div>
                </div>
            </article>





            <LayoutAboutFooter />



        </React.Fragment>


    );
}
export default FinancialPlanning;
