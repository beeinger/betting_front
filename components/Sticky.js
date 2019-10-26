import React, { Component } from "react";
import { Row, Col, Jumbotron, Container, Button } from "react-bootstrap";

export default class Sticky extends Component {
  sticky() {}
  render() {
    return (
      <Row style={{ position: "sticky", top: 0 }}>
        <Col>
          <Button
            style={{
              marginTop: "2vh",
              marginLeft: "2vw"
            }}
          >
            Energia
          </Button>
        </Col>
        <Col>
          <Button
            className="sticky"
            style={{
              float: "right",
              marginTop: "2vh",
              marginRight: "2vw"
            }}
          >
            Stan konta
          </Button>
        </Col>
      </Row>
    );
  }
}
