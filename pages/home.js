import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import { Container, Col, Row, Jumbotron } from "react-bootstrap";
import { sectionsContainer } from "../containers/section";
import { Subscribe } from "unstated";
import Sticky from "../components/Sticky";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      api_address:
        "https://api.sportradar.us/soccer-t3/eu/en/schedules/2019-10-26/schedule.json?api_key=qrzwwkzsyhr8e5ugh5vskuze"
    };
    this.fetchSports();
  }

  fetchSports() {
    fetch(api_adress, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "X-Originating-IP": "192.162.131.250"
      }
    }).then(function(response) {
      console.log(response.sport_events[0].tournament.name);
    });
  }
  render() {
    return (
      <Layout>
        <Subscribe to={[sectionsContainer]}>
          {sections => (
            <Container className="home" key="home">
              <Sticky />
              <Jumbotron
                style={{
                  marginLeft: "7vw",
                  minHeight: "150vh"
                }}
              ></Jumbotron>
            </Container>
          )}
        </Subscribe>
      </Layout>
    );
  }
}
