import React from "react";

function Hero() {
  return (
    <section className="container" id='support-hero'>
        <div className="p-3" id="support-wrapper">
            <h4>Support Portal</h4>
            <a href="">Track Tickets</a>
        </div>
        <div className="row p-4" id='support-hero-content'>
            <div className="col-6" id='support-content-left'>
                <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder="Eg. how do I activate F&O"/> <br />
                <a href="">Track account opening</a>&nbsp;&nbsp;
                <a href="">Track segment activation</a>&nbsp;&nbsp;
                <a href="">Intraday margins</a>&nbsp;&nbsp;
                <a href="">Kite user manual</a>&nbsp;&nbsp;
            </div>
            <div className="col"></div>
            <div className="col-5 p-5" id="support-content-right">
                <h1 className="fs-3">Featured</h1>
                <ol>
                    <li><a href="">Current Takeovers and Delisting - January 2026 </a><br /></li>
                    <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                </ol>
            </div>
        </div>
    </section>
  );
}

export default Hero;
