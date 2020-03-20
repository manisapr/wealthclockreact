import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function SIPCalculator() {
    return (
        <React.Fragment>

            <div class="money-top money-management1">
               
    <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>SIP Calculator</h3>
                            <p>
                                <strong>Now, plan for your financial future with ease!</strong>
                            </p>
                            <p>
                                With an easy spin of the money wheel SIP calculator, you can now calculate how small investments
                                made at regular intervals can grow to a large figure over a period of time due to power of compounding.
                            </p>
                           
                  </div>
                    </div>
                </section>
               
                <section class="inner-page">
                    <div class="container">
                        <div class="sip-calculator">
                            <h5>Follow the simple steps below to find out how to realise your financial dreams:</h5>
                            <div class="calculator-area">
                                <div class="calculator-text">
                                    <h3>1. Define your <br />investment criteria</h3>
                                    <p>Click on the rate of interest displayed against the amount you plan to invest monthly. You can also drag and align it to the black arrow.</p>
                                </div>
                                <div class="calculator-text right">
                                    <h3>2. Your calculated amount</h3>
                                    <p>The 'Total Investment' row will show the amount to be invested for the specific year's plan, and the 'Amount you get' row displays the calculated amount at the end of the specific year's plan</p>
                                </div>

                                <div class="wheel-area-outer">
                                    <div class="wheel-area">
                                        <div id="rotateFlag1" class="tempPosi">false</div>
                                        <div id="rotateFlag2" class="tempPosi">false</div>
                                        <div id="rotateFlag3" class="tempPosi">false</div>
                                        <div id="rotateFlag4" class="tempPosi" title="align the wheel to center of the amount">true</div>
                                        <div id="rotateFlag5" class="tempPosi">Amt:10000 | 12%</div>
                                        <div id="rotateFlag6" class="tempPosi">75</div>
                                        <div id="rotateFlag7" class="tempPosi">true</div>
                                        <div id="rotateFlag8" class="tempPosi">320.4845920999779</div>
                                        <div id="ieConsole" class="tempPosi"></div>
                                        <div id="iPadConsole" class="tempPosi">w:360 | x:554 | y:544 | newangle:320.4845920999779</div>
                                        <div class="wrapper">
                                            <div class="clear"></div>
                                            <div class="wheelContent">
                                                <div class="displayPer">15%</div>
                                                <div class="calcDiv">
                                                    <div class="row ">
                                                        <ul class="openLt">
                                                            <li title=""><span>3</span> Years</li>
                                                            <li title=""><span>5</span> Years</li>
                                                            <li title=""><span>10</span> Years</li>
                                                            <li title=""><span>15</span> Years</li>
                                                            <li title=""><span>20</span> Years</li>
                                                        </ul>
                                                    </div>
                                                    <div class="row">
                                                        <div class="head">Total Investment</div>
                                                        <ul class="investedValue" id="amtInvestedID">
                                                            <li>
                                                                <label>360000</label>
                                                            </li>
                                                            <li>
                                                                <label>600000</label>
                                                            </li>
                                                            <li>
                                                                <label>1200000</label>
                                                            </li>
                                                            <li>
                                                                <label>1800000</label>
                                                            </li>
                                                            <li class="last">
                                                                <label>2400000</label>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                    <div class="row">
                                                        <div class="head">Amount you get</div>
                                                        <ul class="investedValue" id="amtGetID">
                                                            <li>
                                                                <label>430769</label>
                                                            </li>
                                                            <li>
                                                                <label>816697</label>
                                                            </li>
                                                            <li>
                                                                <label>2300387</label>
                                                            </li>
                                                            <li>
                                                                <label>4995802</label>
                                                            </li>
                                                            <li class="last">
                                                                <label>9892554</label>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                                <div class="wheelImg"><img src={require("../images/sip-logo.png")}/>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                    <div class="GHD"></div>
                                                </div>
                                                <div class="clear"></div>
                                                <div class="wheelContainer">
                                                    <div class="rotbutcont">
                                                        <div class="rotator">
                                                            <span class="lineH"></span>
                                                            <span class="lineV"></span>
                                                            <div class="rotator-line"><span class="lineH"></span></div>
                                                        </div>
                                                        <div class="tempPosi rotatefield inputfield">71</div>
                                                        <div class="ieRotator"><img src={require("../images/money-wheel.png")}/>
                                                        </div>
                                                        <div class="hiddenRotator"></div>
                                                    </div>

                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                            <div class="onloadLytBoxOverlay"></div>
                                            <div class="onloadLytBoxImg">
                                                <a href="javascript:;" title="Closed" class="ui-link"> </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </div>                        
            <LayoutAboutFooter />
        </React.Fragment>
        );
}
export default SIPCalculator;
