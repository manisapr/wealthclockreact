import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function CuttingExtraExpenses() {
    return (

        <React.Fragment>
 
            <div class="money-top">

                <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>Cutting extra expenses</h3>
                            <p>
                             Reducing your spending is just as important as increasing cash flow to
   
                       your overall financial health. Cutting back on even one small category
   
                       (like a store-bought coffee each day) can have a big long-term impact on
   
                       your savings.
                </p>

                        </div>
                    </div>
                </section>

                <section class="inner-page">
                    <div class="container">
                        <div class="rounded-box delayed">
                            <div class="header-t">
                                <h2>Cutting extra expenses</h2>
                            </div>
                            <div class="row-custom clearfix">
                                <div class="col-md-4 select-box">
                                    <label>Know power of cutting down your unwanted expenses</label>
                                    <label>Total Expenses</label>
                                    <input type="text" class="but txt-type" id="txtamnt" maxlength="8" />
                                    <label class="errormsg hide" id="spnamnt">Please insert total expenses amount</label>
                                    <label>How frequently can you save this Expense</label>
                                    <select class="selectpicker" id="ddinterval">
                                        <option selected value="">Select Your Options</option>
                                        <option value="1">Yearly</option>
                                        <option value="2">Semi Annual</option>
                                        <option value="4">Quaterly</option>
                                        <option value="12">Monthly</option>
                                        <option value="52">Weekly</option>
                                        <option value="365">Daily</option>
                                    </select>
                                    <label class="errormsg hide" id="spnddinterval">Please slect frequently expenses</label>
                                    <label>For how many years you will save this Expense</label>

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
                                    <label class="errormsg hide" id="spnddyear">Please slect year</label>
                                    <label>Expected Return(%)</label>


                                    <input type="text" id="slider4" value="" name="range" />
                                    <label class="errormsg hide" id="spnslider4">Please slect range</label>
                                </div>
                                <div class="right-delayed-figure">
                                    <div class="cost-text extra-t"> I can make <span id="spanresult" style={{color: 'EB7F1F'}}></span> by cutting my expenses.</div>
                                    <div class="fig-right"><img src={require("../images/fig2.png")} alt="" /></div>
                                </div>
                            </div>
                            <div class="singlerow-per clearfix">
                                <a class="commn-bttn" id="cuttingEx" href="javascript:void(0)">Calculate</a>

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
export default CuttingExtraExpenses;
