import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import Home from "./Components/Home";
import Solution from "./Components/Solution";
import FinancialPlanning from "./Components/FinancialPlanning";
import RetirementPlanning from "./Components/RetirementPlanning";
import GoalPlanning from "./Components/GoalPlanning";
import TaxPlanning from "./Components/TaxPlanning";
import Insight from "./Components/Insight";
import KnowledgeBytes from "./Components/KnowledgeBytes";
import Trending from "./Components/Trending";
import Moneytools from "./Components/Moneytools";
import CuttingExtraExpenses from "./Components/CuttingExtraExpenses";
import RiskAnalyzer from "./Components/RiskAnalyzer";
import Wealthclockpicks from "./Components/Wealthclockpicks";
import IsItGoodTimeToInvest from "./Components/IsItGoodTimeToInvest";
import DelayedSIP from "./Components/DelayedSIP";
import Contactus from "./Components/Contactus";
import Infographic from "./Components/Infographic";
import AssetAllocation from "./Components/AssetAllocation";
import SIPCalculator from "./Components/SIPCalculator";
import RightAmountForYourSIP from "./Components/RightAmountForYourSIP";










export default function App() {
    return (
        <Router>
            <div>
     <header className="top-header">
                <div className="container-fluid">
                    <div className="top-tble">
                        <div className="logo">
                            <a href="/"><img src="/logo.png" alt="" /></a>
                        </div>

                        <div className="rght-menu right-side-menu h-header">
                            <div className="sign-in">
                                <a className="commn-bttn" href="#">LOG IN</a>
                                <a className="register-bttn" href="#">Register now</a>
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
                                                    <li><Link to="/FinancialPlanning">Financial Planning</Link></li>
                                                    <li><Link to="/RetirementPlanning">Retirement Planning</Link></li>
                                                    <li><Link to="/GoalPlanning">Goal Planning</Link></li>
                                                    <li><Link to="/TaxPlanning">Tax Planning</Link></li>
                                                </ul>
                                            </li>

                                            <li><Link to="/Wealthclockpicks">WEALTHCLOCK PICKS</Link></li>
                                            <li className="dropdown">
                                                <Link to="/Moneytools">Money Tools<span className="caret"></span></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="/SIPCalculator">Sip Calculator</Link></li>
                                                    <li><Link to="/AssetAllocation">Asset Allocation</Link></li>
                                                    <li><Link to="/CuttingExtraExpenses">Cutting extra expenses</Link></li>
                                                    <li><Link to="/RiskAnalyzer">Risk Analyzer</Link></li>
                                                    <li><Link to="/IsItGoodTimeToInvest">Is it Good time to invest</Link></li>
                                                    <li><Link to="/DelayedSIP">Delayed SIP</Link></li>
                                                    <li><Link to="/RightAmountForYourSIP">Right Amount for your SIP</Link></li>
                                                </ul>
                                            </li>

                                            <li className="dropdown">
                                                <Link to="/Insight">Insight<span className="caret"></span></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="#">Blog</Link></li>
                                                    <li><Link to="/KnowledgeBytes">Knowledge Bytes</Link></li>
                                                    <li><Link to="/Infographic">Infographic</Link></li>
                                                    <li><Link to="/Trending">Trending</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/Contactus">Support </Link></li>
                                           
                                    </ul>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
           

               
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>                   
                    <Route path="/Solution">
                        <Solution />
                    </Route>
                    <Route path="/FinancialPlanning">
                        <FinancialPlanning />
                    </Route>
                    <Route path="/RetirementPlanning">
                        <RetirementPlanning />
                    </Route>
                    <Route path="/GoalPlanning">
                        <GoalPlanning />
                    </Route>
                    <Route path="/TaxPlanning">
                        <TaxPlanning />
                    </Route>
                    <Route path="/Wealthclockpicks">
                        <Wealthclockpicks/>
                    </Route>
                    <Route path="/Moneytools">
                        <Moneytools />
                    </Route>
                    <Route path="/SIPCalculator">
                        <SIPCalculator />
                    </Route>
                    <Route path="/AssetAllocation">
                        <AssetAllocation />
                    </Route>
                    <Route path="/CuttingExtraExpenses">
                        <CuttingExtraExpenses />
                    </Route>
                    <Route path="/RiskAnalyzer">
                        <RiskAnalyzer />
                    </Route>
                    <Route path="/IsItGoodTimeToInvest">
                        <IsItGoodTimeToInvest />
                    </Route>
                    <Route path="/DelayedSIP">
                        <DelayedSIP />
                    </Route>
                    <Route path="/RightAmountForYourSIP">
                        <RightAmountForYourSIP />
                    </Route>
                    <Route path="/Insight">
                        <Insight />
                    </Route>
                   
                    <Route path="/KnowledgeBytes">
                        <KnowledgeBytes />
                    </Route>
                    <Route path="/Trending">
                        <Trending />
                    </Route>
                    <Route path="/Infographic">
                        <Infographic />
                    </Route>
                    <Route path="/Contactus">
                        <Contactus/>
                    </Route>
                   
                </Switch>
            </div>



        </Router>
    );
}





