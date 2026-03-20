import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container border-bottom mb-5 text-center">
      <h1>Zerodha Products</h1>
      <h3 className="text-muted mt-3 fs-4 p-3">
        Sleek, modern, and intuitive trading platforms
      </h3>
      <p className="mt-3">
        Check out our{" "}
        <Link to="/investments" style={{ textDecoration: "none" }}>
          investment offerings<span>→</span>
        </Link>
      </p>
    </div>
  );
}

export default Hero;
