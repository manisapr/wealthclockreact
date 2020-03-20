import React from 'react';

import LayoutAboutFooter from './Layout/LayoutAboutFooter';

function RetirementPlanning() {
    return (
        <React.Fragment>


            <section className="bannr-sec retirement">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>Retirement Planning</h1>

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
                            The importance of retirement planning is understood by all. However, very often people retire without achieving their ideal retirement fund sum. The reasons vary from spending habits, unforeseen expenses or lack of knowledge of investment. Here are some challenges faced by most people who want to plan for a comfortable retirement.
            </p>
                    </div>
                </div>
            </section>
            <section className="retirement-plan">
                <div className="container">
                    <div className="commn-outr wow fadeInUp">
                        <p>Today we are going do discuss the 4 major factors, which challenge and distract individuals from saving for retirement</p>
                        <div className="row">
                            <div className="col-sm-6 col-md-6">
                                <div className="retirement-factor  wow fadeInUp">
                                    <img src={require("../images/retirement-01.jpg")} alt="" />
                                    <div className="retirement-txt">
                                        <span className="suga">Factor No. 1</span>
                                        <h4>Inefficient budgeting</h4>
                                        <p>

                                            The ever increasing expenses are not always met with proportional income increments. Over the past decade average inflation rate has been XX whereas the average increment is only XX. And every increase in income bring increase in expenses such as better house, better cars and a better lifestyle in general. This inefficient budgeting of income causes people to feel that they do not enough money to earmark for retirement.

                                    </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="retirement-factor  wow fadeInUp">
                                    <img src={require("../images/retirement-02.jpg")} alt="" />
                                    <div className="retirement-txt">
                                        <span className="suga">Factor No 2</span>
                                        <h4>Late planning</h4>
                                        <p>

                                            People are not likely to think about retirement funds when they are in their hay days. This is a common mistake made by many young hard working individuals who believe that retirement is too far to worry about. It is much later that the importance of retirement fund dawns to them. This risk can be voided by timely planning how you use your hard earned money.

                                    </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="retirement-factor  wow fadeInUp">
                                    <img src={require("../images/retirement-03.jpg")} alt="" />
                                    <div className="retirement-txt">
                                        <span className="suga">Factor No. 3</span>
                                        <h4>Non-priority</h4>
                                        <p>

                                            A man earns to meet many ends such as new house, holidays or a wedding. Often in the list of things one saves for, retirement fund does not enjoy a position of priority. Timely highlighting the importance of such retirement fund can make the difference between a comfortable and secure retirement sum or an inadequate fund.

                                    </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <div className="retirement-factor  wow fadeInUp">
                                    <img src={require("../images/retirement-04.jpg")} alt="" />
                                    <div className="retirement-txt">
                                        <span className="suga">Factor No 4</span>
                                        <h4>Unexpected expense</h4>
                                        <p>

                                            Many a times people plan every small details of their expenses but an unexpected big expense destroys the rigid plan. Such events range from unexpected ailments, natural disasters, political instability, shutting down of companies as so on. By having a contingency fund and a flexible investment plan, one can reduce the impact of such expenses on their long term goals.

                                    </p>

                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </section>
            <figure className="wow fadeInUp">
                <div className="commn-outr vdo-sec clearfix">
                    <div className="container">
                        <div className="col-sm-6 col-md-6">
                            <div className="vdo-innr">
                                <p>
                                    <strong>Wealthclock advisors specialises</strong> in the creation of flexible retirement planning to ensure you receive the most
                                    effective retirement arrangements to suit your lifestyle now and in the future. Our Pension solutions include
                                    investment products for those starting out on their retirement savings as well as products such as QROPS and
                                    SIPPS to enable expatriates and repatriates to benefit from flexible Pensions legislation.
                    </p>
                                <p>
                                    Our Pension advice and education is designed to provide clients with greater control over their retirement
                                    option We work with the leading product providers in the financial industry to offer comprehensive choice
                                    and give you the freedom to stop work when you want to - not when you have to.
                    </p>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-6">
                            <div className="vdo-innr-vdo">
                                <iframe src="https://www.youtube.com/embed/iLkIHFRVog8"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
            <article className="pension-advice">
                <div className="container">
                    <p>
                        <strong>Our Pension advice and education</strong> is designed to provide clients with greater control over their retirement option We work with the
            leading product providers in the financial <strong>industry to offer comprehensive choice and give you the freedom to</strong> stop work when you want
                                    to - not when you have to.
        </p>
                </div>
            </article>
            <LayoutAboutFooter />

        </React.Fragment>

    );
}
export default RetirementPlanning;