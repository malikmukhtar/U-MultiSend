import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Projects() {
  const [isEnabled, setIsEnabled] = useState(true); // Initial state

  const toggleButton = () => {
    setIsEnabled((prevState) => !prevState); // Toggle state
  };
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo className="mt-5 mb-5 d-flex justify-content-center">
            <h1 className="font40 extraBold">
              Experience the simplest way to send tokens at scale.
            </h1>
          </HeaderInfo>

          <div className="row textCenter">
            <Tabs
              defaultActiveKey="home"
              id="fill-tab-example"
              className="mb-3"
              fill
            >
              <Tab
                eventKey="home"
                title="Upload CSV / Enter Addresses Manually"
                className="d-flex justify-content-center"
              >
                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-8">
                  <Form>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select Token</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>ETH</option>
                          <option>BTC</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Decimal</Form.Label>
                        <Form.Control type="text" placeholder="" />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label className="d-flex justify-content-start">
                        Wallet Addresses
                      </Form.Label>
                      <Form.Label
                        className="mb-3 d-flex justify-content-end"
                        onClick={toggleButton}
                      >
                        {isEnabled ? "Switch to Manual" : "Switch to CSV"}
                      </Form.Label>
                      {isEnabled ? (
                        <Form.Control type="file" size="lg" />
                      ) : (
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter Addresses Manually"
                        />
                      )}
                    </Form.Group>

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        controlId="formGridCity"
                        className="d-flex justify-content-between"
                      >
                        <Form.Label>
                          <p>
                            <a
                              href="#"
                              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                              How it works
                            </a>
                          </p>
                        </Form.Label>
                        <Form.Label>
                          <p>
                            <a
                              href="https://multisend.org/CSV_Example.csv"
                              className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                            >
                              Download Example CSV
                            </a>
                          </p>
                        </Form.Label>
                      </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                      Approve and Send
                    </Button>
                  </Form>
                </div>
              </Tab>

              <Tab
                eventKey="contact"
                title="Fetch Wallet Addresses from X-tweet (Coming Soon)"
                disabled
              >
                Coming Soon
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

