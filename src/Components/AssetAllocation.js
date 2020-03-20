import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function AssetAllocation() {

    return (

        <React.Fragment>

            <div class="money-top">

                <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>Asset Allocation</h3>
                            <p>
                                Asset allocation is an investment portfolio technique that aims to balance risk and
                                create diversification by dividing assets among major categories such as cash,
                                bonds, stocks, real estate and derivatives. Each asset class has different levels
                                of return and risk, so each will behave differently over time.
                </p>
                        </div>
                    </div>
                </section>
                <section class="inner-page">
                    <div class="container">
                        <div class="rounded-box">
                            <div class="header-t">
                                <h2>Asset Allocation</h2>
                            </div>
                            <p>Every sensible investor knows that it is unwise to put all your eggs in one basket. It makes better sense to spread your investments across-</p>
                            <h3>Choose your specifications</h3>
                            <div class="row-custom clearfix">
                                <div class="col-sm-8 col-md-4 select-box">
                                    <label>1.what is your age?</label>
                                    <div class="slider-ui-single">
                                        <div class="area-of-oraange" style={{right:'66%'}}>21</div>
                                        <input type="text" id="slider1" value="" name="range" />
                                        <div class="area-of-oraange">80</div>
                                    </div>
                                    <label>2.how much risk of loss can you bear without getting affected?</label>
                                    <div class="slider-ui-single">
                                        <div class="area-of-oraange" style={{right:'66%'}}>Low</div>
                                        <input type="text" id="slider2" value="" name="range" />
                                        <div class="area-of-oraange">Very High</div>
                                    </div>
                                    <label>3. Investment Horizon</label>
                                    <div class="slider-ui-single">
                                        <div class="area-of-oraange" style={{right:'66%'}}>1 Year</div>
                                        <input type="text" id="slider3" value="" name="range" />
                                        <div class="area-of-oraange">25 Year</div>

                                    </div>
                                    <label>4. Do you believe Small Cap & Sector Funds are better investments then large caps</label>
                                    <div class="risk-rado asset-btn">
                                        <div class="asset-rado">
                                            <input type="radio" id="radio01" name="radio" />
                                            <label for="radio01"><span></span>Yes</label>
                                        </div>
                                        <div class="asset-rado">
                                            <input type="radio" id="radio02" name="radio" checked="checked" />
                                            <label for="radio02"><span></span>No</label>
                                        </div>
                                    </div>
                                    <label><b>As per your profile it is recomended to invest <span style={{ color: '#EB7F1F' }}>40%</span> in equity and <span style={{ color: '#EB7F1F' }}>60%</span> in Debt</b></label>
                                </div>
                                <div class="col-md-8 col-sm-4">
                                    <div class="">
                                        <div class="row">
                                           
                                <div class="col-md-12">
                                                <div class="mainpaichart">
                                                    <div id="piechart_3d" class="submainpaichart" style={{height: '300px' , display: 'inline-block'}}>
                                                    </div>
                                                </div>
                                                <div class="subpie">
                                                    <div class="clsdebt">

                                                        <div class="" id="second_div">
                                                           
                                                            <div id="piechart_3d1" style={{ height: '200px' }}></div>
                                                        </div>
                                                    </div>
                                                    <div class="clsequity">

                                                        <div class="" id="third_div">
                                                            
                                                            <div id="piechart_3d2" style={{height:'200px'}}></div>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="delayed-list">
                                <p>
                                    Let Mutual Fund range of calculators make investing an easy enjoyable and profitable business.
                                    Mutual Fund 'Financial Advisor' can put you on the right track and increase the profitability of your investments.
                    </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <LayoutAboutFooter />
        </React.Fragment>
        );
}
export default AssetAllocation;
