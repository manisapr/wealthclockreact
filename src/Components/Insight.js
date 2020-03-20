import React from "react";


import LayoutAboutFooter from "./Layout/LayoutAboutFooter";

function Insight() {
    return (
        <React.Fragment>


            <section class="bannr-sec insight-bnnr">
                <div class="bannr-outr">
                    <div class="container">
                        <div class="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>An investment in knowledge pays the best interest.</h1>
                            <h4>- Benjamin Franklin</h4>

                        </div>
                    </div>
                </div>

                <div class="ng-scope" id="content-view">
                    <div style={{ display: 'block' }} class="ng-scope" id="mouse-scroll">
                        <div><span class="unu"> </span> <span class="doi"> </span> <span class="trei"> </span> </div>
                    </div>
                </div>

            </section>
            <section class="hm long-term text-center">
                <div class="container">
                    <div class="long-outr commn-outr">
                        <p>
                            It is a promise to take the time to fully understand your goals and ambitions.
                            And it is our mission to bring those goals and ambitions to life.
            </p>

                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <div class="commn-outr clearfix">
                        <div class="com-sm-3 col-md-3">
                            <div class="insight-inn text-center wow fadeInUp">
                                <a href="Insights/Blog.html">
                                    <div class="insight-pic">
                                        <img src={require("../images/insight-blog.jpg")} alt="" />
                                    </div>
                                    <div class="blog-innr">
                                        <h5>Blog</h5>
                                    </div>
                                </a>
                                <div class="blog-innr">
                                    <p>
                                        A Web Log that provides news and information related to the personal finance. It is our mode of sharing the latest insights and analysis of the financial sector
                        </p>
                                </div>
                            </div>
                        </div>

                        <div class="com-sm-3 col-md-3">
                            <div class="insight-inn text-center wow fadeInUp" data-wow-delay="0.5s">
                                <a href="Insights/KnowledgeBytes.html">
                                    <div class="insight-pic">
                                        <img src={require("../images/insight-knowledge.jpg")} alt="" />
                                    </div>
                                    <div class="blog-innr">
                                        <h5>Knowledge Bytes</h5>
                                    </div>
                                </a>
                                <div class="blog-innr">
                                    <p>
                                        Knowledge Bytes allows an individual to make informed and effective decisions with all of their financial resources.
                        </p>
                                </div>
                            </div>
                        </div>

                        <div class="com-sm-3 col-md-3">
                            <div class="insight-inn text-center wow fadeInUp" data-wow-delay="1s">
                                <a href="Insights/Infographic.html">
                                    <div class="insight-pic">
                                        <img src={require("../images/insight-infogra.jpg")} alt="" />
                                    </div>
                                    <div class="blog-innr">
                                        <h5>Infographic</h5>
                                    </div>
                                </a>
                                <div class="blog-innr">
                                    <p>
                                        An illustrative way of understanding financial concepts in money themed graphics easily than text.
                        </p>
                                </div>
                            </div>
                        </div>

                        <div class="com-sm-3 col-md-3">
                            <div class="insight-inn text-center wow fadeInUp" data-wow-delay="1.5s">
                                <a href="Insights/Trending.html">
                                    <div class="insight-pic">
                                        <img src={require("../images/insight-trend.jpg")} alt="" />
                                    </div>
                                    <div class="blog-innr">
                                        <h5>Trending</h5>
                                    </div>
                                </a>
                                <div class="blog-innr">
                                    <p>
                                        A selection of relevant and top article handpick by experienced team for our clients to gain a deeper insights in the financial domain.
                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LayoutAboutFooter />

        </React.Fragment>

    );
}
export default Insight;
