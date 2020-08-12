// Bao - Hello world from JS
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/antoine-barres.jpg") + ")"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">Hello, world from JS</h1>
              <div className="fog-low">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div>
              {/* <div className="fog-low right">
                <img alt="..." src={require("../../assets/img/fog-low.png")} />
              </div> */}
            </div>
            <br />

            <h2 className="presentation-subtitle text-center">
              Enjoy life, enjoy code.
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../../assets/img/clouds.png") + ")"
          }}
        />
        <div className="category category-absolute credits ml-auto">
            <span className="copyright">
              {new Date().getFullYear()}
              <i className="fa fa-heart heart" />
              © Lin
            </span>
          </div>
      </div>
    </>
  );
}

export default IndexHeader;
