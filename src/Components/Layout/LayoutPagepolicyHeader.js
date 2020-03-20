import React from 'react';

function LayoutPagepolicyHeader() {
    return (
        <React.Fragment>

            <header>
                <div className="container">
                    <div className="top-tble">
                        <div className="logo">
                            <a href="/Home/Index"><img src={require("../images/logo.png")} alt="" /></a>
                        </div>

                        <div className="rght-menu inn-menu">
                            <div className="sign-in">

                                <a className="commn-bttn" href="/LoginPage/Login">sign in</a>

                            </div>
                            <div className="navbar-header">
                                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar">&nbsp;</span>
                                    <span className="icon-bar">&nbsp;</span>
                                    <span className="icon-bar">&nbsp;</span>
                                </button>
                                <nav className="collapse navbar-collapse top_nav">
                                    <ul id="demo-1">

                                        <li className="dropdown headmenu">
                                            <a href="/Solutions/Index">Solutions <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/Solutions/FinancialPlanning">Financial Planning</a></li>
                                                <li><a href="/Solutions/RetirementPlanning">Retirement Planning</a></li>
                                                <li><a href="/Solutions/GoalPlanning">Goal Planning</a></li>
                                                <li><a href="/Solutions/TaxPlanning">Tax Planning</a></li>
                                            </ul>
                                        </li>
                                        <li className="headmenu"><a href="/WealthclockPicks/Index">Wealthclock Picks</a></li>
                                        <li className="dropdown headmenu">
                                            <a href="/MoneyTools/Index">Money Tools <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/MoneyTools/SipCalculator">Sip Calculator</a></li>
                                                <li><a href="/MoneyTools/AssetAllocation">Asset Allocation</a></li>
                                                <li><a href="/MoneyTools/CuttingExrtraExpenses">Cutting extra expenses</a></li >
                                                <li><a href="/MoneyTools/RiskAnalyzer">Risk Analyzer</a></li >
                                                <li><a href="/MoneyTools/GoodTimeToInvest">Is it Good time to invest</a></li >
                                                <li><a href="/MoneyTools/DelayedSIP">Delayed SIP</a></li >
                                                <li><a href="/MoneyTools/RightAmountForYourSIP">Right Amount for your SIP</a></li >
                                            </ul >
                                        </li >
                                        <li className="dropdown headmenu">
                                            <a href="/Insights/Index">Insights <span className="caret"></span></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="/Insights/Blog">Blog</a></li>
                                                <li><a href="/Insights/KnowledgeBytes">Knowledge Bytes</a></li >
                                                <li><a href="/Insights/Infographic">Infographic</a></li >
                                                <li><a href="/Insights/Trending">Trending</a></li >
                                            </ul >
                                        </li >
                                        <li className="headmenu"><a href="/ContactUs/Index">Contact us</a></li >

                                    </ul >
                                </nav >
                            </div >
                        </div >
                    </div >
                </div >



            </header >


            <div className="ui-loader ui-loader-default hide">
                <span className="ui-icon ui-icon-loading"></span>
            </div>

        </React.Fragment>
        );
}
export default LayoutPagepolicyHeader;


            

            



               


          

                
        

