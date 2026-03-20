import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/zerodhaFundhouse.png" style={{height:'2.9rem'}}/>
          <p className="text-muted text-small text-center">Assest Management</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/streakLogo.png" style={{height:'2.7rem'}} />
          <p className="text-muted text-small text-center">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/sensibullLogo.svg" style={{height:'2rem'}}/>
          <p className="text-muted text-small text-center">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/smallcaseLogo.png " />
          <p className="text-muted text-small text-center">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/goldenpiLogo.png " />
          <p className="text-muted text-small text-center">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img src="media/images/dittoLogo.png " style={{height:'2.7rem'}} />
          <p className="text-muted text-small text-center">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
