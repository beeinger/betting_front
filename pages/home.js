import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import { Container, Col, Row, Image, Jumbotron } from "react-bootstrap";
import { sectionsContainer } from "../containers/section";
import { Subscribe } from "unstated";
import Sticky from "../components/Sticky";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Subscribe to={[sectionsContainer]}>
          {sections => (
            <div>
              <Sticky />

              <Jumbotron
                className="sticky"
                style={{ minHeight: "35vh" }}
              ></Jumbotron>
            </div>
          )}
        </Subscribe>
      </Layout>
    );
  }
}
