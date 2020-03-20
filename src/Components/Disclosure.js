import React from "react";

function Disclosure() {

    return (

        <React.Fragment>

            <section class="privacy-policy">
                <div class="container">
                    <div class="privacy-innr">
                        <h1>
                            COMMISSION
            </h1>
                        <p>
                            Wealthclock earns commission from Asset Management Companies when the user buys mutual funds. However, the recommendations on funds is not influenced by the commission Wealthclock earns. Here is a list of Mutual Fund Companies that Wealthclock works with and the associated commission rates.
            </p>
                        <div class="comm-graph-outr">
                            <div class="comm-graph">
                                <img src="../images/Disclosure.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="ui-loader ui-loader-default hide">
                <span class="ui-icon ui-icon-loading"></span>
            </div>


        </React.Fragment>
        
        );
}
export default Disclosure;
