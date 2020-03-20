import React from 'react';

import LayoutAboutFooter from './Layout/LayoutAboutFooter';

function TaxPlanning() {
    return (
        <React.Fragment>

            <section className="bannr-sec tax-plan">
                <div className="bannr-outr">
                    <div className="container">
                        <div className="bannr-innr wow fadeInUp" data-wow-delay="0.5s">
                            <h1>Tax Planning</h1>

                        </div>
                    </div>
                </div>

                <div className="ng-scope" id="content-view">
                    <div style={{ display: 'block' }} className="ng-scope" id="mouse-scroll">
                        <div><span className="unu"> </span> <span className="doi"> </span> <span className="trei"> </span> </div>
                    </div>
                </div>

            </section>
            <section className="hm long-term text-center">
                <div className="container">
                    <div className="long-outr commn-outr">
                        <p>
                            It is generally observed that people tend to invest hastily in PPF or ELLS at the end of the financial year just to avail tax benefits. The purpose of tax planning is to ensure tax efficiency without compromising on safety of your investments and returns thereon. Good planning will maximize the available tax benefits from your investment portfolio.
            </p>

                    </div>
                </div>
            </section>
            <section className="tax-sec">
                <div className="container">
                    <div className="commn-outr">
                        <h3>How does tax saving work?</h3>
                        <div>
                            <img src={require("../images/tax-image.jpg")} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="commn-outr">
                        <div className="drct-save">
                            <div className="drct-save-inn clearfix">
                                <h4>Direct Saving - To a Maximum if 1,500,000</h4>
                                <ul>
                                    <li>Public Provident Fund</li>
                                    <li>Savings certificates</li>
                                    <li>Equity Linked Saving Scheme</li>
                                    <li>Principal repayment of Home Loans</li>
                                    <li>Pension Fund</li>
                                    <li>Tutuion Fees</li>
                                    <li>Employee Provident funds</li>
                                    <li>Life insurance: Health insurance:</li>
                                </ul>
                            </div>
                            <div className="drct-save-rght clearfix">
                                <h4>Indirect Saving</h4>
                                <ul>
                                    <li>Small interest</li>
                                    <li>HRA</li>
                                    <li>Treatment for certain diseases</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="assured-sec">
                        <h4>Assured return options</h4>
                        <p>
                            These include bank deposits, PPF, NSC etc. The biggest appeal for these products is their simplicity, familiarity, assured
                            returns and government guarantee. But all of this is at the cost of very low returns.
            </p>
                    </div>
                </div>
            </section>
            <section className="market-link">
                <div className="container">
                    <div className="commn-outr market-link-inn clearfix">
                        <h4>Market linked options</h4>
                        <p>These include traditional insurance option, Unit Linked Insurance Plans (ULIP), contribution to National Pension Scheme (NPS) and Equity Linked Saving Scheme (ELSS).</p>
                        <ul>
                            <li>
                                ULIPS are a mix of both insurance and investment plans often sold as insurance only. It comes with all the risks of investing in equity market with additional burden of lock-in period, mortality charges and inefficient exit routes.
                </li>
                            <li>
                                NPS is an option which deliver market linked returns but the challenge is the long term commitment and limited exit window. Also the option available in NPS commits funds only in index fund and substantial part gets invested in debt market which for a long term investor is not very efficient.
                </li>
                            <li>
                                Its preferable to invest in open-ended diversified mutual funds for equity investment and Debt mutual fund or Public Provident Fund (PPF) for the debt investment. These investments reduce the risk factor substantially with good returns.
                </li>
                        </ul>
                    </div>
                </div>
            </section>
            <LayoutAboutFooter />


        </React.Fragment>

    );
}
export default TaxPlanning;