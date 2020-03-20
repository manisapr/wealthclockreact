import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function RightAmountForYourSIP() {
    return (

        <React.Fragement>
            <div class="money-top">
              
    <section class="hm long-term text-center">
                    <div class="container">
                        <div class="long-outr commn-outr">
                            <h3>Right Amount For Your SIP</h3>
                            <p>
                                A Systematic Investment Plan (SIP) makes sense only when the amount invested
            
                                helps in realizing your dream. Therefore, it is important to arrive at The Right SIP
            
                                Amount. The clarity on the these 3 questions will make it better to achieve the
            
                                goals - What am I investing for?, How long should I invest for? And what should
            
                                be the RIGHT SIP Amount to achieve my goal?
                            </p>
                            
            </div>
                    </div>
                </section>
              
    <section class="inner-page RAFYS">
                    <div class="container">
                        <div class="rounded-box delayed">
                            <div class="header-t">
                                <h2>Right Amount For Your SIP</h2>
                            </div>
                            <div class="sip-right-time">
                                <div class="icon-top-sip"><img src={require("../images/sip-icon-1.png")} alt="" /></div>
                                <h3>How much does your goal cost today?</h3>
                                <div class="slider-outer">

                                    <input type="text" id="goal_slider" value="" name="range" />
                                    <label class="errormsg hide" id="spngoalcost">Please insert goal cost today</label>
                                </div>
                                <div class="text-amount">

                                    <input type="text" class="yearbox" id="txt_goalValue" value="500" />
                                </div>

                            </div>
                            <div class="singlerow-per sing-sipright clearfix">
                                <a class="commn-bttn" id="btnnext1" href="#">next</a>
                            </div>
                        </div>
                    </div>
   </section>
            </div>

       <LayoutAboutFooter/>
 </React.Fragement>
        );
}
export default RightAmountForYourSIP;
