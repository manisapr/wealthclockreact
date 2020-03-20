import React from "react";
import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function Infographic() {

    return (

        <React.Fragment>

            <section class="trend-bnnr">
                <div class="container">
                    <div class="trend-inn">
                        <h1>Infographic</h1>
                    </div>
                </div>
            </section>

            <section class="trendng-sec">
                <div class="container">
                    <div class="commn-outr">
                        <div class="row">
                            <div class="col-sm-3 col-md-3 col-xs-6">
                                <a href={require("../Adminimages/InfographicInsideFinancialPlanning.png")} target="_blank">
                                    <div class="info-graph">
                                        <img src={require("../Adminimages/InfographicCoverFinancialPlanning.png")} alt="" />
                                        <div class="info-graph-innr">
                                            <h5>Financial Planning</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-xs-6">
                                <a href={require("../Adminimages/InfographicInsideHowtoPlanforChildrenEducation.png")} target="_blank">
                                    <div class="info-graph">
                                        <img src={require("../Adminimages/InfographicCoverHowtoPlanforChildrenEducation.png")} alt="" />
                                        <div class="info-graph-innr">
                                            <h5>How to Plan for Children Education</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-xs-6">
                                <a href={require("../Adminimages/InfographicInsidePowerofCompouding.jpg")} target="_blank">
                                    <div class="info-graph">
                                        <img src={require("../Adminimages/InfographicCoverImagePowerofCompouding.jpg")} alt="" />
                                        <div class="info-graph-innr">
                                            <h5>Power of Compouding</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-xs-6">
                                <a href={require("../Adminimages/InfographicInsideInvestmentMantrastoSuityourAge.png")} target="_blank">
                                    <div class="info-graph">
                                        <img src={require("../Adminimages/InfographicCoverImageInvestmentMantrastoSuityourAge.jpg")} alt="" />
                                        <div class="info-graph-innr">
                                            <h5>Investment Mantras to Suit your Age</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-xs-6">
                                <a href={require("../Adminimages/index_01.jpg")} target="_blank">
                                    <div class="info-graph">
                                        <img src={require("../Adminimages/3-strategies-to-generate-wealth.png")} alt="" />
                                        <div class="info-graph-innr">
                                            <h5>5 Steps to generate wealth</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <LayoutAboutFooter />
        </React.Fragment>
    );
}
export default Infographic;