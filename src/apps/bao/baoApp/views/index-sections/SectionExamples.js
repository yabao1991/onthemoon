// Bao - Hello world from JS
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import './index.scss'

// core components

function SectionExamples() {
  return (
    <>
      <div className="section section-dark section-samples">
        <Container>
          <Row className="example-page">
              <Col className="text-center" md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">AI</h4>
                    <p>
                      一些JS人工智能示例 - Some AI demo via JS
                    </p>
                    <Button
                      className="btn-outline-neutral btn-round"
                      href="/landing-page"
                      target="_blank"
                      disabled
                    >
                      Coming soon...
                    </Button>
                  </div>
                </div>
              </Col>

              <Col className="text-center" md="6">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">JS Library</h4>
                    <p>
                      Some unique js examples
                    </p>
                    <Button
                      className="btn-outline-neutral btn-round"
                      href="/index"
                      target="_blank"
                      disabled
                    >
                      Landing Page
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionExamples;
