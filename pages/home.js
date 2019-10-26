import React, { Component } from "react";
import dynamic from "next/dynamic";
import { Row, Col, Jumbotron, Container, Navbar } from "react-bootstrap";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" React Bootstrap"}
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Jumbotron></Jumbotron>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
