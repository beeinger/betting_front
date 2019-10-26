import React, { Component } from "react";
import { Row, Col, Jumbotron, Container, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

export default class Sticky extends Component {
  sticky() {}
  render() {
    return (
      <Jumbotron
        style={{
          position: "sticky",
          top: 0,
          maxHeight: "2vh",
          paddingTop: "1vh",
          marginBottom: "0vh"
        }}
      >
        <Button
          style={{
            marginTop: "2vh",
            marginLeft: "10vw"
          }}
        >
          {"Energia "}
          <Icon className="battery full" />
        </Button>

        <Button
          style={{
            float: "right",
            marginTop: "2vh",
            marginRight: "2vw"
          }}
        >
          {"Stan konta "}
          <Icon className="plus" />
        </Button>
      </Jumbotron>
    );
  }
}
