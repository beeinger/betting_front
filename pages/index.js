import React, { Component } from "react";
import dynamic from "next/dynamic";
import FacebookButton from "../components/Index/FacebookButton.js";
import { Row, Col, Jumbotron, Container, Form } from "react-bootstrap";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {
        container: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          minHeight: "100vh"
        },
        col: { minWidth: "45vw" },
        row: { justifyContent: "center" }
      }
    };
  }

  render() {
    return (
      <Layout>
        <Container style={this.state.styles.container}>
          <Row>
            <Col></Col>
            <Col style={this.state.styles.col}>
              <Jumbotron>
                <Col>
                  <Row style={this.state.styles.row}>
                    <h2>Welcome in Betymate</h2>
                    <p align="center">
                      To join our community please login with Facebook to
                      compete with your friends
                    </p>
                  </Row>
                  <Row style={this.state.styles.row}>
                    <FacebookButton />
                  </Row>
                </Col>
              </Jumbotron>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
