import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-muted fs-6 text-center" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
        <h1>Charges</h1>
        <h4 className="text-muted">List of all charges and taxes</h4>
        <div className="col-4 p-5">
            <img src="media/images/pricing0.svg" alt="Free Equity Delivery" />
            <h2 className="fs-4">Free equity delivery</h2>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
            <img src="media/images/intradayTrades.svg" alt="Intraday and F&O trades" />
            <h2 className="fs-4">Intraday and F&O trades</h2>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
            <img src="media/images/pricingMF.svg" alt="Free direct MF" />
            <h2 className="fs-4">Free direct MF</h2>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
