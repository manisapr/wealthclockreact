import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function RiskAnalyzer() {
    return (

        <React.Fragment>
            <div class="money-top">
               
        <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>Risk Analyzer</h3>
                            <p style={{fontsize: '16px'}}>
                                Personality Profile Analyser is a tool to determine your risk tolerance in terms of ability and willingness to take risk and understanding of investment decision making. Having a better understanding of your risk profile helps us in anticipating your concerns, structure a discussion on your investment program in terms that would be simple for you to understand, and construct a relevant investment policy
                                statement (IPS).
                    </p>
                        </div>

                    </div>
                </section>
              
        <section class="inner-page">
                    <div class="container">
                        <div class="rounded-box">
                            <div class="header-t">
                                <h2>Risk Analyzer</h2>
                            </div>
                            <div class="bld-wealth-inn risk-range text-center">

                                <div id="partialData">



                                    <link href="../css/ion.rangeSlider.css" rel="stylesheet" />
                                    <link href="../css/ion.rangeSlider.skinFlat.css" rel="stylesheet" />
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.2.3/jquery-confirm.min.css" />


                                        <h6>Get Started!</h6>
                                        <figure class="risk-analyse">

                                            <div class="risk-hdr">
                                                <div class="risk-pic"><img src={require("../images/ques-mark.png")} alt="" /></div>
                                                <h3> Feed in your age ?</h3>
                                            </div>
                                        <div class="slider-outer">
                                            <div class="row">
                                                <input type="text" id="example_id" name="example_name" value="" />
                                            </div>

                                            <div class="range-top">

                                            </div>

                                            <div>
                                                <span class="textbox" id="spnRes">Less than 26 Years</span>
                                            </div>
                                        </div>

                                        </figure>
                                       


                            
                        </div>
                                <div class="paginate">
                                    <ul class="pagination">
                                        <li class="active Newpage"><a class="anc_nextpage" id="anc_nextpage1" href="javascript:void(0)">1</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage2" href="javascript:void(0)">2</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage3" href="javascript:void(0)">3</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage4" href="javascript:void(0)">4</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage5" href="javascript:void(0)">5</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage6" href="javascript:void(0)">6</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage7" href="javascript:void(0)">7</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage8" href="javascript:void(0)">8</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage9" href="javascript:void(0)">9</a></li>
                                        <li class="Newpage"><a class="anc_nextpage" id="anc_nextpage10" href="javascript:void(0)">10</a></li>
                                    </ul>
                                </div>
                                    <div class="arrows-sec ">
                                        <div class="paginate-bttns page-lft hide" id="leftarrow">
                                            <a id="anc_prevpage" href="javascript:void(0)"><img src={require("../images/prev.png")} alt="" /> Prev</a>
                                        </div>
                                        <div class="paginate-bttns page-rght " id="rightarrow">
                                            <a class="" id="anc_nextPage" href="javascript:void(0)">Next <img src={require("../images/next.png")} alt="" /></a>
                                        </div>
                                        <div class="page-rght hide" id="submitbtn">
                                            <a class="commn-bttn" id="submitbtnn" href="javascript:void(0)">submit</a>
                                        </div>
                                    </div>
                                    <input type="text" class="hide txt_pageno" value="1" />
                                </div>
                            </div>
                        </div>
                    
        </section>
            </div>
            <LayoutAboutFooter />


        </React.Fragment>
        );
}
export default RiskAnalyzer;