// Bao - Hello world from JS
/*eslint-disable*/
import React from "react";
import './index.scss'

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
            <i className="fa fa-heart heart" /> {new Date().getFullYear()}{" "}
              © Lin
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
