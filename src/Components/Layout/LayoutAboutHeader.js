import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../Home';
import About from '../About';
import Solution from '../Solution';


export default function LayoutAboutHeader() {
    return (

        <Router>

            <header className="top-header">
                <div className="container-fluid">
                    <div className="top-tble">
                        <div className="logo">
                            <a href="/Components/Home"><img src="/logo.png" alt="" /></a>
                        </div>

                        <div className="rght-menu right-side-menu h-header">
                            <div className="sign-in">
                                <a className="commn-bttn" href="/Login/loginpage">LOG IN</a>
                                <a className="register-bttn" href="/Registration/Registrationpage">Register now</a>
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
                                        <li className="active">
                                            <Link to="/">Home</Link>

                                        </li>



                                        <li className="dropdown">
                                            <Link to="/Solution">
                                                Solutions <span className="caret"></span>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/Solutions/FinancialPlanning">Financial Planning</Link></li>
                                                <li><Link to="/Solutions/RetirementPlanning">Retirement Planning</Link></li>
                                                <li><Link to="/Solutions/GoalPlanning">Goal Planning</Link></li>
                                                <li><Link to="/Solutions/TaxPlanning">Tax Planning</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/wealthclockpicks/index/">WEALTHCLOCK PICKS</Link></li>
                                        <li className="dropdown">
                                            <Link to="/MoneyTools/index">Money Tools<span className="caret"></span></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/MoneyTools/SipCalculator">Sip Calculator</Link></li>
                                                <li><Link to="/Moneytools/AssetAllocation">Asset Allocation</Link></li>
                                                <li><Link to="/Moneytools/CuttingExrtraExpenses">Cutting extra expenses</Link></li>
                                                <li><Link to="/Moneytools/RiskAnalyzer">Risk Analyzer</Link></li>
                                                <li><Link to="/Moneytools/GoodTimeToInvest">Is it Good time to invest</Link></li>
                                                <li><Link to="/Moneytools/DelayedSIP">Delayed SIP</Link></li>
                                                <li><Link to="/Moneytools/RightAmountForYourSIP">Right Amount for your SIP</Link></li>
                                            </ul>
                                        </li>

                                        <li className="dropdown">
                                            <Link to="/Insights/Index">Insight<span className="caret"></span></Link>
                                            <ul className="dropdown-menu">
                                                <li><Link to="/Insights/Blog">Blog</Link></li>
                                                <li><Link to="/Insights/KnowledgeBytes">Knowledge Bytes</Link></li>
                                                <li><Link to="/Insights/Infographic">Infographic</Link></li>
                                                <li><Link to="/Insights/Trending">Trending</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/ContactUs/index">Support </Link></li>

                                    </ul>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
           

        </Router >


        //<div className="text-center">
        //    <div className="ui-loader ui-loader-default hide">
        //        <span className="ui-icon ui-icon-loading"></span>
        //    </div>
        //</div>

        
        );
}
        
        


            




  
               

