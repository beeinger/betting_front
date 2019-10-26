import React, { Component } from "react";
import dynamic from "next/dynamic";
import { Row, Col, Jumbotron, Container, Button } from "react-bootstrap";
import Sticky from "../components/Sticky";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Sticky />
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Jumbotron style={{ minHeight: "150vh" }}></Jumbotron>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}
