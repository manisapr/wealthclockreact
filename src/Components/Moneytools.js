import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function Moneytools() {
    return (

        <React.Fragment>
            <figure class="top-scren">
               
    <section class="bannr-sec money-bannr">
                    <div class="bannr-outr">
                        <div class="container">
                            <div class="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                                <h1>Money Tools</h1>
                               
                </div>
                        </div>
                    </div>
                   
        <div class="ng-scope" id="content-view">
                        <div style={{display: 'block'}} class="ng-scope" id="mouse-scroll">
                            <div><span class="unu"> </span> <span class="doi"> </span> <span class="trei"> </span> </div>
                        </div>
                    </div>
                   
    </section>
               
    <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>Ours is a long-term commitment, to you and to your future generations.</h3>
                            <p>
                                It is a promise to take the time to fully understand your goals and ambitions.
                                And it is our mission to bring those goals and ambitions to life.
                </p>
                            
            </div>
                    </div>
                </section>
               
            </figure>

            <section class="money-sec">
                <div class="container">
                    <div class="commn-outr wow fadeInUp">
                        <div id="owl-demo4" class="money-tools owl-carousel owl-theme">
                            <div class="item">
                                <div class="money-innr text-center">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/sip-icon.png")} alt="" />
                                    </div>
                                    <h4>SIP Calculator</h4>

                                    <p>
                                        Now, plan for your financial future with ease! With an easy spin of the money wheel SIP ca..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/SipCalculator.html">learn more</a>
                            </div>

                            <div class="item">
                                <div class="money-innr">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/asset-icon.png")} alt="" />
                                    </div>
                                    <h4>Asset Allocation</h4>


                                    <p>
                                        Asset allocation is an investment portfolio technique that aims to balance risk and create..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/AssetAllocation.html">learn more</a>
                            </div>
                            <div class="item">
                                <div class="money-innr">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/right-amnt-icon.png")} alt="" />
                                    </div>
                                    <h4>Right Amount For Your SIP</h4>

                                    <p>
                                        A Systematic Investment Plan (SIP) makes sense only when the amount invested helps in real..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/RightAmountForYourSIP.html">learn more</a>
                            </div>
                            <div class="item">
                                <div class="money-innr">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/cutting-icon.png")} alt="" />
                                    </div>
                                    <h4>Cutting Extra Expenses</h4>

                                    <p>
                                        Reducing your spending is just as important as increasing cash flow to your overall financ..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/CuttingExtraExpenses.html">learn more</a>
                            </div>
                            <div class="item">
                                <div class="money-innr">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/delayed-icon.png")} alt="" />
                                    </div>
                                    <h4>Delayed SIP</h4>

                                    <p>
                                        Waiting to begin your savings plan may have an important impact on your results. A delay o..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/DelayedSIP.html">learn more</a>
                            </div>
                            <div class="item">
                                <div class="money-innr">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/good-time-icon.png")} alt="" />
                                    </div>
                                    <h4>Is It a Good Time to Invest</h4>

                                    <p>
                                        80% investors make below average returns because they invest when the market is highly pri..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/GoodTimeToInvest.html">learn more</a>
                            </div>
                            <div class="item">
                                <div class="money-innr">
                                    <div class="money-innr-icon">
                                        <img src={require("../images/risk-anayiser-icon.png")} alt="" />
                                    </div>
                                    <h4>Risk Analyser</h4>

                                    <p>
                                        Personality Profile Analyser is a tool to determine your risk tolerance in terms of abilit..
                        </p>
                                </div>
                                <a class="commn-bttn" href="MoneyTools/Riskanalyser.html">learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>

    );
}
export default Moneytools;

