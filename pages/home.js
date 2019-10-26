import React, { PureComponent } from "react";
import dynamic from "next/dynamic";
import { Jumbotron } from "react-bootstrap";
import { sectionsContainer } from "../containers/section";
import { Subscribe } from "unstated";
import Sticky from "../components/Sticky";
import { Header, Image, Table } from "semantic-ui-react";

const Layout = dynamic(() => import("../components/Layout/Layout"), {
  ssr: false
});

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      matches: [
        {
          time: "2019-10-26T11:00:00+00:00",
          name: "Premier League",
          competitors: ["FC Tambov", "FC Ufa"],
          qualifier: ["home", "away"],
          ids: ["sr:competitor:107213", "sr:competitor:74241"],
          venue: "Mordovia Arena, Saransk, Russia"
        },
        {
          time: "2019-10-26T11:00:00+00:00",
          name: "Premier League",
          competitors: ["FC Mariupol", "Kolos Kovalivka"],
          qualifier: ["home", "away"],
          ids: ["sr:competitor:3319", "sr:competitor:213176"],
          venue: "Volodymyra Boika Stadium, undefined, undefined"
        }
      ]
    };
  }

  async componentDidMount() {
    const request = await fetch("localhost:3000/events/future", {
      method: "GET"
    });

    const matches = await request.json();

    this.setState({ matches });
    console.log(matches);
  }

  render() {
    const matches = this.state.matches;
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
              <Table basic="very" celled singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">Time</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Home</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Away</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {matches.map((match, index) => {
                    return (
                      <Table.Row key={index + "match"}>
                        <Table.Cell textAlign="center">{match.time}</Table.Cell>
                        <Table.Cell textAlign="center">
                          {match.competitors[0]}
                        </Table.Cell>
                        <Table.Cell textAlign="center">
                          {match.competitors[1]}
                        </Table.Cell>
                      </Table.Row>
                    );
                  })}
                </Table.Body>
              </Table>
            </div>
          )}
        </Subscribe>
      </Layout>
    );
  }
}
