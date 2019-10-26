import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import { Container, Col, Row } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { sectionsContainer } from "../containers/section";
import { Subscribe } from "unstated";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

let scrollToComponent;

export default class Home extends PureComponent {
  componentDidMount() {
    scrollToComponent = require("react-scroll-to-component");
  }
  render() {
    return (
      <Layout>
        <Subscribe to={[sectionsContainer]}>
          {sections => (
            <Container
              style={{
                minHeight: "90vh",
                position: "relative",
                textAlign: "center"
              }}
              ref={section => {
                sections.state.Home = section;
              }}
              className="home"
              key="home"
            >
              <br style={{ lineHeight: "10vh" }} />
              <a
                style={
                  sections.state.size === "small"
                    ? { fontSize: "20vw" }
                    : { fontSize: "20vh" }
                }
              >
                Betymate
              </a>
              <Row>
                <Col />
                <Col style={{ minHeight: "5vh" }}>
                  <Row
                    style={{
                      marginTop: "38vh",
                      marginBottom: "2vh",
                      minHeight: "5vh"
                    }}
                  >
                    <Col
                      onClick={async () => {
                        sections.setState({ zoom: 955 });
                        await scrollToComponent(sections.state.About, {
                          offset: 0,
                          align: "bottom",
                          duration: 1500
                        });
                      }}
                    >
                      <Icon
                        name="angle down"
                        className="arrow-down"
                        style={{
                          color: "white"
                        }}
                        size="big"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col />
              </Row>
              <style jsx global>{`
                .home {
                  max-width: 100vw !important;
                }
              `}</style>
            </Container>
          )}
        </Subscribe>
      </Layout>
    );
  }
}
