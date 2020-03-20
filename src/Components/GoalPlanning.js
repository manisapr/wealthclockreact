import React from 'react';

import LayoutAboutFooter from './Layout/LayoutAboutFooter';

function GoalPlanning() {
    return (
        <React.Fragment>

            <section className="bannr-sec goal-plan">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>Goal Planning</h1>

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
                            An understanding of the differences between traditional financial planning and goals-based financial planning is critical to leveraging one's financial growth. Personalfinancial goalswill differ in the length of time needed to achieve them.Be sure everygoalhas a specific purpose, a specific amount that it will cost, and a realistic target date.
            </p>

                    </div>
                </div>
            </section>
            <figure className="goal-tab financial-tab wow fadeInUp clearfix">
                <div className="container">
                    <ul className="nav nav-tabs responsive">
                        <li className="active"><a data-toggle="tab" href="#menu1">What is Goal planning</a></li>
                        <li><a data-toggle="tab" href="#menu2">How it works</a></li>
                        <li><a data-toggle="tab" href="#menu3">Advantages of Goal planning</a></li>
                    </ul>
                    <div className="tab-content responsive">
                        <div id="menu1" className="tab-pane fade in active">
                            <div className="financial-outr">
                                <div className="financial-txt">
                                    <h3>What is Goal planning</h3>
                                    <p>
                                        In life, circumstances can arise that will make it easier or more challenging for an investor to meet his or her objectives. For example, taking a job with a pension benefit or buying an annuity can greatly decrease the need for a self-funded retirement account, while having a son or daughter who plans to join the armed forces may decrease the investment needed to pay for college. An employment contract or severance agreement can reduce the need for an emergency fund, but a breadwinner facing health problems might increase the necessity of such a fund. Owing to the common occurrence of such situations, one can say that Goals-based planning is clearly not the newest trend that will go out of style in a few years-it is the next evolution of financial planning.
                        </p>
                                    <p>
                                        Yet at the same time, the reality is that in practice the goals-based approach doesn't always go as smoothly as hoped. Some people tend to procrastinate while making goals, while others have goals that are wildly unrealistic and force planners to be the bearers of bad news. More often than not, people tend to change their goals mid-way via various iterations of "what if" plans, which culminate in a giant mess that the clients aren't committed to.
                        </p>
                                    <p>
                                        But perhaps the fundamental risk with goals-based planning is simply that it puts the cart before the horse; clients shouldn't be selecting the goals to pursue until they understand what the possibilities are in the first place! Here at wealthclock, we insist on doing the understanding on the clients behalf resulting in a more productive series of financial planning recommendations to be delivered for implementation.
                        </p>
                                </div>
                                <div className="goal-pic">
                                    <img src={require("../images/goal-planig-3.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="menu2" className="tab-pane fade">
                            <div className="financial-outr">
                                <div className="financial-txt">
                                    <h3>How it works</h3>
                                    <p>
                                        Goals based planning helps to prevent emotional investment decisions by providing a clear, straightforward process for identifying goals, choosing investment strategies to meet them, and measuring progress toward them. Traditional financial planning measures progress and performance against market benchmarks while goals-based planning measures progress against an individual's unique goals.
                        </p>
                                    <p>
                                        Goals-based planning first looks at an individual's specific objectives, divides them into "pockets" and then examines all of a his or her assets (not just investable assets) as they relate to these "pockets". For example, assets in a Public Provident Fund are allocated to the retirement goals pocket. Specific investment strategies are then developed for each pocket, based on the investor’s current asset base, risk capacity and his or her goal for that pocket.(e.g. : Grow retirement fund to Rupees 1 crore by age 60).
                        </p>
                                    <p>
                                        Once an individual's goals and liabilities are defined, he or she will need to set priorities and establish a timeline for each goal. Of course, progress towards these goals have to be continually monitored rather than simply making certain that the portfolio beats a benchmark.
                        </p>
                                </div>
                                <div className="goal-pic">
                                    <img src={require("../images/how-it-works-3.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="menu3" className="tab-pane fade">
                            <div className="financial-outr">
                                <div className="financial-txt">
                                    <h3>Advantages of Goal planning</h3>
                                    <p>
                                        Traditional planning can leave investors exposed to unintended consequences. When an investor’s risk tolerance exceeds his or her risk capacity, there can be a detrimental effect on the portfolio, slowing the progress toward achieving life goals —as when the dot-com bubble burst in 2001 and 2002 and again in the stock market downturn of 2007 and 2008. Hence, by aligning an investor’s asset allocation to an investor’s risk capacity for each goal, the financial advisor makes the planning process both more efficient and more flexible. For example, an investor would have less risk capacity for an essential goal (e.g., funding a child’s education), which calls for a more conservative investing approach, but would have greater risk capacity for a non-essential or discretionary goal (e.g., buying a vacation home), which calls for a more aggressive one.
                        </p>
                                    <p>
                                        In the goals-based approach, mitigating market volatility is still an important consideration, but the chief risk is the failure to reach a specific goal.
                        </p>
                                    <h3>
                                        Broad Advantages :
                        </h3>
                                    <p>1. Maps your goals to optimized portfolios based on risk capacity and time horizon, resulting in high suitability correlation.</p>
                                    <p>2. Enhances decision making ability on investment products.</p>
                                    <p>3. Reduces asset flight due to downturn in market.</p>
                                    <p>4. Lowers retention risk as funds are periodically directed to new goals.</p>

                                </div>
                                <div className="goal-pic">
                                    <img src={require("../images/Advantage-4.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
            <LayoutAboutFooter />

        </React.Fragment>

    );
}
export default GoalPlanning;