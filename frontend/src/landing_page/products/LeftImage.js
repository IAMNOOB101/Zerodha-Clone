import React from "react";

function LeftImage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div >
            <a href={tryDemo} style={{textDecoration: 'none'}}>Try Demo<span>→</span></a>
            <a href={learnMore} style={{marginLeft: "90px", textDecoration: 'none'}}>Learn More<span>→</span></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{marginLeft: '40px'}}>
              <img src="media\images\appStoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
