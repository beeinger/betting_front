import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import { Icon } from "semantic-ui-react";
import Link from "next/link";
import { Subscribe } from "unstated";
import { sectionsContainer } from "../../containers/section";
import { sidebarContainer } from "../../containers/sidebar";

export default class Sidebar extends Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <Subscribe to={[sidebarContainer, sectionsContainer]}>
          {sidebar => (
            <SideNav
              style={{
                background: "rgba(125,125,125,0.7)",
                position: "fixed"
              }}
              expanded={sidebar.state.expanded}
              onToggle={() =>
                sidebar.setState({
                  expanded: !sidebar.state.expanded
                })
              }
              onMouseEnter={() =>
                sidebar.setState({
                  expanded: true
                })
              }
              onMouseLeave={() =>
                sidebar.setState({
                  expanded: false
                })
              }
            >
              <SideNav.Toggle style={{ background: "black" }} />
              <SideNav.Nav>
                <Link href="/home">
                  <NavItem
                    style={{
                      background:
                        sectionsContainer.state.location === "home"
                          ? "rgba(135,135,135,0.5)"
                          : "rgba(0,0,0,0)"
                    }}
                  >
                    <NavIcon>
                      <Icon
                        name="home"
                        style={{
                          fontSize: "1.75em",
                          color: "white"
                        }}
                      />
                    </NavIcon>
                    <NavText style={{ color: "white" }}>Home</NavText>
                  </NavItem>
                </Link>
                <Link href="/friends">
                  <NavItem
                    style={{
                      background:
                        sectionsContainer.state.location === "friends"
                          ? "rgba(0,0,0,0.2)"
                          : "rgba(0,0,0,0)"
                    }}
                  >
                    <NavIcon>
                      <Icon
                        name="group"
                        style={{
                          fontSize: "1.75em",
                          color: "white"
                        }}
                      />
                    </NavIcon>
                    <NavText style={{ color: "white" }}>Friends</NavText>
                  </NavItem>
                </Link>
                <Link href="/modes">
                  <NavItem
                    style={{
                      background:
                        sectionsContainer.state.location === "modes"
                          ? "rgba(0,0,0,0.2)"
                          : "rgba(0,0,0,0)"
                    }}
                  >
                    <NavIcon>
                      <Icon
                        name="gamepad"
                        style={{
                          fontSize: "1.75em",
                          color: "white"
                        }}
                      />
                    </NavIcon>
                    <NavText style={{ color: "white" }}>Modes</NavText>
                  </NavItem>
                </Link>
                <Link href="/shop">
                  <NavItem
                    style={{
                      background:
                        sectionsContainer.state.location === "shop"
                          ? "rgba(0,0,0,0.2)"
                          : "rgba(0,0,0,0)"
                    }}
                  >
                    <NavIcon>
                      <Icon
                        name="shopping basket"
                        style={{
                          fontSize: "1.75em",
                          color: "white"
                        }}
                      />
                    </NavIcon>
                    <NavText style={{ color: "white" }}>Shop</NavText>
                  </NavItem>
                </Link>
              </SideNav.Nav>
            </SideNav>
          )}
        </Subscribe>
      </div>
    );
  }
}
