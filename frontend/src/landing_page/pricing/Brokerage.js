import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="#" style={{textDecoration:'none'}}><h3>Brokerage</h3></a>
          <ul style={{textAlign:'left', lineHeight: '2.5', fontSize: '16px'}}> 
            <li className="text-small text-muted">Call & Trade and RMS auto-squareoff:Additional charges of 50 + GST per order.</li>
            <li className="text-small text-muted">Digital contract notes will be sent via e-mail.</li>
            <li className="text-small text-muted">Physical copies if contract notes, if required, shall be charged 20 per contract note. Courier charges apply.</li>
            <li className="text-small text-muted">For NRI account (non-PIS), 0.5% or 100 per executed order for equity (whicheveris lower).</li>
            <li className="text-small text-muted">For NRI account (PIS), 0.5% or 200 per executed order for equity (whichever is lower).</li>
            <li className="text-small text-muted">If the account is debit balance, any order placed will be charged 40 per executed order instead of 20 per executed order.</li>
          </ul>
        </div>
        <div className="col-4 p-4">
          <a href="#" style={{textDecoration:'none'}}><h4>List of Charges</h4></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
