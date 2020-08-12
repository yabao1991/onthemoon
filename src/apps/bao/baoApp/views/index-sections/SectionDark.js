// Bao - Hello world from JS
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionDark() {
  return (
    <>
      <div className="section section-dark">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Examples</h2>
              {/* <p className="description">
                Sharing
              </p> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
