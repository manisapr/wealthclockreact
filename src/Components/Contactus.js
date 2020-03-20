import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function Contactus() {

    return (

        <React.Fragment>

            <section class="bannr-sec contact-us">
                <div class="bannr-outr">
                    <div class="container">
                        <div class="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>Contact us</h1>
                        </div>
                    </div>
                </div>
             
    <div class="ng-scope" id="content-view">
                    <div style={{display: 'block'}} class="ng-scope" id="mouse-scroll">
                        <div><span class="unu"> </span> <span class="doi"> </span> <span class="trei"> </span> </div>
                    </div>
                </div>
               
            </section>

            <section class="contact-sec">
                <div class="container">
                    <div class="commn-outr">
                        <div class="row">
                            <div class="col-sm-5 col-md-5">
                                <div class="contact-us-innr">
                                    <h2>Queries / Suggestion</h2>
                                    <div class="contact-us-inpt">
                                        <label>Full Name<sup style={{color:'red'}}>*</sup></label>
                                        <input type="text" class="custon-input" id="txt_Name" placeholder="Please insert your full name" />
                                        <label id="span_Name" class="errormsg hide">Please insert your full name.</label>
                                        <label id="span_NameVal" class="errormsg hide">Please insert a valid  full name.</label>
                                    </div>
                                    <div class="contact-us-inpt">
                                        <label>Email<sup style={{color:'red'}}>*</sup></label>
                                        <input type="email" required class="custon-input" id="txt_Email" autocomplete="off" placeholder="Please insert your email" value="" maxlength="100" />
                                        <label id="span_email" class="errormsg hide">Please insert your email.</label>
                                        <label id="span_emailVal" class="errormsg hide">Please insert a valid  email.</label>
                                    </div>
                                    <div class="contact-us-inpt">
                                        <label>Mobile number<sup style={{color:'red'}}>*</sup></label>
                                        <input type="tel" required class="custon-input" id="txt_Mobile" placeholder="Please insert your mobile" maxlength="10" />
                                        <label id="span_MobNo" class="errormsg hide">Please insert your mobile.</label>
                                        <label id="span_MobNoVal" class="errormsg hide">Please insert a valid  mobile number.</label>
                                    </div>
                                    <div class="contact-us-inpt">
                                        <label>Your Comments<sup style={{color:'red'}}>*</sup></label>
                                        <textarea id="txtcomments" placeholder="Enter your comment..."></textarea>
                                        <label id="span_comments" class="errormsg hide">Enter your comment.</label>
                                    </div>
                                    <div class="contact-us-inpt">

                                        <img src="ContactUs/GetCaptchaImage.png" />

                                    </div>
                                    <div class="contact-us-inpt">
                                        <input type="text" id="CaptchaInputText" value="" />
                                        <label id="span_captcha" class="errormsg hide">Enter above captcha.</label>
                                    </div>
                                    <div class="contact-us-inpt">
                                        <input class="commn-bttn" id="ContactUsClick" type="submit" value="submit" />
                                    </div>
                                </div>
                            </div>
                           
                <div class="col-sm-7 col-md-7">
                                <div class="contact-us-map">
                                    <div id="map"></div>
                                    <br />

                                    <h6>Wealthclock Advisors</h6>
                                    <br />
                                    <h6>Mumbai Office : </h6>
                                    <p>205, Regal Diamond Center, Opera House, Mumbai, Maharashtra 400004</p>
                                    <p>Mobile: +91 80970 11188</p>
                                    <br />
                                    <h6>Indore Office : </h6>
                                    <p>17- B Scheme No. 71, Main Road  Indore - 452009 Madhya Pradesh</p>
                                    <p>Mobile: +91 97022 33617</p>
                                    <br />
                                    <h6>Delhi Office : </h6>
                                    <p> F-14/71, Model Town Phase II Delhi -110009 </p>
                                    <p>Mobile: +91 99907 30005</p>
                                    <br />
                                    <h6>Kolkata Office : </h6>
                                    <p>Plot no. 146, 19/7, Sahapur Colony, Bankim  Mukherjee Sarani, Block J , Kolkata, West Bengal - 700053</p>
                                    <p>Mobile: +91 99038 66366</p>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="alert alert-danger hide" id="div_error" role="alert" style={{ margintop: '1%', textalign: 'center' }}>
                        <strong id="txt_error"></strong>
                    </div>
                    <div class="alert alert-success hide" id="div_success" role="alert" style={{ margintop: '1%', textalign: 'center' }}>
                        <strong id="txt_success"></strong>
                    </div>
                </div>
            </section>
            <LayoutAboutFooter />

           

        </React.Fragment>
      
        
        );
}

export default Contactus;
