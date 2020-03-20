import React from 'react';




import LayoutAboutFooter from './Layout/LayoutAboutFooter';


function HowItWorks() {
    return (
        <React.Fragment>


            <section className="bannr-sec how-it-sec">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp animated" data-wow-delay="0.5s" style={{ visibility: 'visible' /*-webkit-animation-delay: 0.5s*/ /*-moz-animation-delay:*//* 0.5s animation-delay: 0.5s*/ }}>
                            <h1>How it works</h1>

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
                            Our purpose is making investing simple and fun. Traditionally investment is perceived as a daunting task meant only for avid market followers and analysists. Our purpose at Wealthclock is to make investing as simple as booking movie tickets online. Follow the 4/5 simple steps to a secure future. Happy investing!
                            </p>

                    </div>
                </div>
            </section>

            <figure className="how-sec">
                <div className="container">
                    <div className="commn-outr how-it clearfix">
                        <h2>How our investment process works</h2>
                        <ul>
                            <li>
                                <a href="#understand" className="act underst wow fadeInUp" data-wow-delay="0.5s"><img src={require("../images/how-icon-01.png")} alt="" /></a>
                                <a href="#agree" className="act agre how-pic wow fadeInUp" data-wow-delay="1.5s"><img src={require("../images/how-icon-03.png")} alt="" /></a>
                                <a href="#review" className="act reviw how-pic wow fadeInUp" data-wow-delay="2.5s"><img src={require("../images/how-icon-05.png")} alt="" /></a>
                            </li>
                            <li>
                                <a href="#develop" className="act develp wow fadeInUp" data-wow-delay="1s"><img src={require("../images/how-icon-02.png")} alt="" /></a>
                                <a href="#act" className="act actt how-pic wow fadeInUp" data-wow-delay="2s"><img src={require("../images/how-icon-04.png")} alt="" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </figure>

            <figure>
                <div className="container">
                    <div id="understand" className="understand commn-outr wow fadeInUp clearfix animated" style={{ visibility: 'visible' }}>
                        <div className="how-hdr hdr-blu"><h2>Understand</h2><span>Understand</span></div>
                        <div>
                            <div className="under-pic">
                                <img src={require("../images/understand.jpg")} alt="" />
                            </div>
                            <ul>
                                <li>
                                    <strong>There is no 'one size fits all' </strong> solution for financial planning - our services are personalized keeping all your needs in mind. We understand that every user has different reasons for investing. Some may want to invest for a house, for a holiday or simply to park their surplus funds for short or long term. All these users have different risk appetites, ideal holding period and periodicity of investment.
                    </li>
                                <li>
                                    <strong>Short term and long term goals </strong>- Our financial planners can help you reach your goals for any kind of investment period. Start investing to make sure you have saved enough money for the retirement you want or a much deserved holiday or for your dream destination wedding. It's never too early to invest!
                    </li>
                                <li>
                                    <strong>Full fledged financial </strong> advisory for those who are not sure what they want to do with their money. We understand your various needs and offer multiple plans to meet your many goals. Our advisors keep in mind your investment convenience and priorities before investing.
                    </li>
                            </ul>
                        </div>
                    </div>

                    <div id="develop" className="understand commn-outr wow fadeInUp clearfix animated" style={{ visibility: 'visible' }}>
                        <div className="how-hdr hdr-yelo"><h2>Develop</h2><span>Develop</span></div>
                        <div>
                            <div className="under-pic">
                                <img src={require("../images/develop.jpg")} alt="" />
                            </div>
                            <p>
                                We use two pillars to ensure that you create wealth in the manner best suited to you. These two pillars are:
                </p>
                            <ul>
                                <li>
                                    The "right" asset allocation -By this we mean your investment has the right mix of funds , I,e, equity and debt, that are best suited to your risk appetite and goals. Our recommended portfolio will be different for someone who is risk averse, has a large portfolio and is nearing retirement, as opposed to someone who is 30 years old, has a smaller portfolio and is willing to face some volatility for higher returns. Many studies have shown that the "right" asset allocation is the most critical variable in creating sustained wealth over the long term, but is often the most overlooked aspect. The asset allocation evolves as the portfolio matures and investor requirements change. We help you create and maintain the right balance of assets, over the life of your portfolio.
                    </li>
                                <li>
                                    The "right" funds - There are no "best funds" in our view-only "right funds". So we recommend the funds which suit your profile best. For instance, a fund might be the "best performing fund" in its category, but that simply means that its returns are the best over one time period-it doesn�t take into account that it has been very volatile in giving those returns. For a conservative investor who prefers stable and stress-free investments, such fund may not be the right pics. On the other hand the same fund may be right for aggressive investors looking for high returns.
                    </li>
                            </ul>
                            <p>
                                Welathclock's algorithms will ensure that you invest in the right mix of funds and the right funds. The ideal mix will keep changing as per your requirements and maturity of portfolio.
                </p>
                        </div>
                    </div>

                    <div id="agree" className="understand commn-outr wow fadeInUp clearfix animated" style={{ visibility: 'visible' }}>
                        <div className="how-hdr hdr-gren"><h2>Shortlist</h2><span>Shortlist</span></div>
                        <div className="act-fund-sec">
                            <div className="act-fund">
                                <div className="act-fund-inn">
                                    <h4>We recommend just 4 funds in each categories</h4>
                                </div>
                            </div>
                            <div className="act-tab">
                                <ul className="nav nav-tabs responsive hidden-xs hidden-sm" id="tabs-0">
                                    <li className="active"><a data-toggle="tab" href="#menu1">Transparent</a></li>
                                    <li><a data-toggle="tab" href="#menu2">Un-Biased</a></li>
                                    <li><a data-toggle="tab" href="#menu3">Data Driven</a></li>
                                </ul>
                                <div className="tab-content responsive hidden-xs hidden-sm">
                                    <div id="menu1" className="tab-pane fade in active">
                                        <p>
                                            Our fund selection process is a combination of experience and proprietary algorithm, so we keep it as transparent as possible for our investors.
                            </p>
                                    </div>
                                    <div id="menu2" className="tab-pane fade">
                                        <p>
                                            Our algorithms keep in check that we don't get biased towards any funds on accounts of high returns due to market conditions or any incentives. We recommend only funds with proven track record.
                            </p>
                                    </div>
                                    <div id="menu3" className="tab-pane fade">
                                        <p>
                                            We use a combination of criteria's such as Age of the fund, Fund Manager managing the fund, Returns the fund generated, Consistency of the fund & Risk adjusted returns the fund has delivered. This data driven methodology helps in picking funds.
                            </p>
                                    </div>
                                </div>





                            </div>
                        </div>


                        <div className="shortlistng-proc">
                            <h3>Criteria used for shortlisting the funds</h3>
                            <div className="new-shortlist">
                                <div className="criteria-1 torquise">
                                    <div className="cr-txt-1">
                                        Criteria 1
                        </div>
                                    <div className="cr-box-1">
                                        <h3>Age of the Fund</h3>
                                    </div>
                                    <p>
                                        Funds with proven track record of 10 years. This reduces short term bias towards any fund which have performed
                                        better due to market conditions.
                        </p>
                                </div>
                                <div className="criteria-2 yello">
                                    <div className="cr-txt-1">
                                        Criteria 2
                        </div>
                                    <div className="cr-box-1">
                                        <h4>Portfolio Manager Managing the fund Since</h4>
                                    </div>
                                    <p>
                                        Wealth creation is a long term process and we strongly believe that investing with a long term vision pays heft dividends.
                                        Hence we like funds in which the portfolio manager has been managing with minimum of 7 years.
                        </p>
                                </div>
                                <div className="criteria-3 pinky">
                                    <div className="cr-txt-1">
                                        Criteria 3
                        </div>
                                    <div className="cr-box-1">
                                        <h3>Returns</h3>
                                    </div>
                                    <p>
                                        We look at the weighted average performance of the funds over a 1, 3,5, 7 and 10 year period. Only the funds with high returns are picks
                        </p>
                                </div>
                                <div className="criteria-4 purplle">
                                    <div className="cr-txt-1">
                                        Criteria 4
                        </div>
                                    <div className="cr-box-1">
                                        <h3>Consistency</h3>
                                    </div>
                                    <p>
                                        We look for funds consistency as an important factor and so we select only those funds which have beaten the benchmark on a consistent basis
                        </p>
                                </div>
                                <div className="criteria-5 gren">
                                    <div className="cr-txt-1">
                                        Criteria 5
                        </div>
                                    <div className="cr-box-1">
                                        <h3>Efficient Returns</h3>
                                    </div>
                                    <p>
                                        We give equal emphasis on the risk the portfolio manager has taken. We apply the Information Ratio and the Sharpe
                                        ratio to determine the funds risk adjusted return.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="act" className="understand commn-outr wow fadeInUp clearfix animated" style={{ visibility: 'visible' }}>
                        <div className="how-hdr hdr-grey"><h2>Implement</h2><span>Implement</span></div>
                        <div>
                            <div className="under-pic">
                                <img src={require("../images/Implementation.jpg")} alt="" />
                            </div>
                            <p>
                                There are really three things everyone needs to keep in mind when thinking about their own financial planning:
                </p>
                            <ul>
                                <li>
                                    The first is expectations: if you want to live like a king you need to come up with a plan to accumulate enough funds to do so.&nbsp;
                                    The accumulation to live like a pauper is much lower.&nbsp; So expectations are very important.&nbsp;
                    </li>
                                <li>
                                    The second is accumulating.&nbsp; You need to accumulate commensurately with your expectations.&nbsp;
                                    A person desiring to live like a king needs to accumulate great wealth, a person satisfied to live like a pauper requires much less.&nbsp;
                    </li>
                                <li>
                                    The third is spending.&nbsp; Each time you spend you need to keep the expectation in line.&nbsp;
                                    Spending now may make it harder to live like a king later while spending now may make it easier to live like a pauper.&nbsp;
                    </li>
                            </ul>
                            <p>
                                All three require decisions to be made constantly, whether these decisions are made consciously or unconsciously are up to you.
                </p>
                        </div>
                    </div>

                    <div id="review" className="understand commn-outr wow fadeInUp clearfix animated" style={{ visibility: 'visible' }}>
                        <div className="how-hdr hdr-prple"><h2>Review</h2><span>Review</span></div>
                        <p>
                            When are you most likely to do a reality check on your investments? Is it when they're doing well? Or is it when the
                            markets are down and you're nervous? Chances are it is the latter, which may not be the optimal time to make investment
                            decisions, particularly if emotions are high. That's why taking the time to do an annual review of your investments and
                            other financial matters makes sense. "Think of it as if you were driving on a dangerous road. That's not when you check
                            your brakes and tires. You do that before, so you know they are in good shape."
            </p>
                        <p>
                            An annual financial checkup can accomplish many things. You can stop and think about your family's financial goals,
                            such as saving for retirement, a house, or a child's education. You can consider reducing taxes on your investments,
                            protecting your income, or building a financial cushion. Once you are clear on your goals, you can then work on ensuring
                            that you are investing appropriately for those goals.
            </p>

                    </div>

                </div>
            </figure>

            <LayoutAboutFooter />


        </React.Fragment>

    );
}
export default HowItWorks;
            



