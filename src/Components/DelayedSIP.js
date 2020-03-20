import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function DelayedSIP(){

    return (

        <React.Fragment>


            <div class="money-top">
              
    <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>Delayed SIP</h3>
                            <p>
                                Waiting to begin your savings plan may have an important impact on
            
                                your results. A delay of even a few years could cost thousands of
            
                                rupees. Procrastination and delay in formulating and implementing a
            
                                proper financial plan can have serious repercussions on future financial
            
                                goals. Postponement in planning can result in a higher financial burden
            
                                in the later stages of life, and one may not be able to save enough for
            
                                long term goals.
                </p>
                           
            </div>
                    </div>
                </section>
              
    <section class="inner-page">
                    <div class="container">
                        <div class="rounded-box delayed">
                            <div class="header-t">
                                <h2>Delayed SIP</h2>
                            </div>
                            <div class="row-custom clearfix">
                                <div class="col-md-4 select-box">
                                    <label>Calculate, how much money you will loose if you delay your investment today</label>
                                    <label>Enter Amount<sup style={{color:'red'}}>*</sup></label>
                                    <input type="text" class="but txt-type" id="txtamnt" maxlength="8" />
                                    <label class="errormsg hide" id="spnamnt">Please insert amount.</label>
                                    <label>Investment Horizon(in years)<sup style={{color:'red'}}>*</sup></label>

                                    <select class="selectpicker" id="ddyear">
                                        <option selected value="">Select year</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                    </select>
                                    <label class="errormsg hide" id="spnddyear">Please slect year.</label>
                                    <label>Expected Return(%)<sup style={{color:'red'}}>*</sup></label>

                                    <input type="text" id="slider5" value="" name="range" />
                                    <label class="errormsg hide" id="spnslider5">Please slect return.</label>
                                    <label>Delay in starting SIP from today(in months)<sup style={{color:'red'}}>*</sup></label>
                                    <input type="number" id="txtmonth" class="but txt-type" />
                                    <label class="errormsg hide" id="spnmonth">Please insert dealy months.</label>
                                    <div class="singlerow-per clearfix">
                                        <a class="commn-bttn" id="btncalc" href="javascript:void(0)">Calculate</a>
                                    </div>
                                </div>
                                <div class="right-delayed-figure">
                                    <div class="cost-text">Cost of delaying your investment today can cost you <span id="spanresult" style={{color: '#EB7F1F'}}></span></div>
                                    <div class="fig-right"><img src={require("../images/fig1.png")} alt="" /></div>
                                </div>
                            </div>
                            <div class="delayed-list">
                                <ul>
                                    <li><span>About Delayed Investment Calculator</span> - You can know, how much money you will loose, in case you delay your monthly Investments(SIP) today</li>
                                    <li><span>What is Delay in investing</span> - Each of us have unlimited financial goals- Retirement, Kids education planning, Marriage, vacation etc.. To fulfil these goals, one need to start saving money at right time , so that one can create desired fund. Sooner you start, lower the amount of savings you need to create fund.If you delay the investments today, you will require more money to invest to meet goal.</li>
                                    <li><span>Basis</span> - You can enter the amount of SIP you want or you wanted to start ,alongwith the period of investment. Enter the period of delay to start your SIP.All returns are Pre tax returns.</li>
                                    <li><span>More</span> - To know which are the right investments for you to meet your financial Goals, Start Now</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    </section>
            </div>
            <LayoutAboutFooter />
        </React.Fragment>
        
        );
}
export default DelayedSIP;
