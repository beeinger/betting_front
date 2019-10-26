import React, { PureComponent } from "react";
import Head from "next/head";
import { Provider, Subscribe } from "unstated";
import { Swipeable } from "react-swipeable";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { sidebarContainer } from "../../containers/sidebar";
import { sectionsContainer } from "../../containers/section";
import Sidebar from "../Sidebar/Sidebar";
import "bootstrap-css-only/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Sticky from "../Sticky";

// dynamic imports (using window inside components) - import dynamic from "next/dynamic";
// routing (changing pages etc) - import Router from "next/router";

export default class Layout extends PureComponent {
  render() {
    const { children } = this.props;
    sectionsContainer.setState({ location: children.key });

    return (
      <div
        className="main"
        style={{
          height: "100%",
          minHeight: "100vh"
        }}
      >
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="Description" content="Dupnij sobie becik byqu" />
          <title>Betting</title>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#3d5194" />
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"
          />
        </Head>
        <Provider>
          {/* <Subscribe to={[esteticContainer]}>
              {containers => ( */}
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionLeave={false}
            transitionEnter={false}
            transitionAppearTimeout={500}
          ></ReactCSSTransitionGroup>
          {/* )}
          </Subscribe> */}
          <Swipeable
            onSwipedLeft={eventData =>
              sidebarContainer.setState({ expanded: false })
            }
            onSwipedRight={eventData =>
              sidebarContainer.setState({ expanded: true })
            }
          >
            <Sidebar />

            <div onClick={() => sidebarContainer.setState({ expanded: false })}>
              {children}
            </div>
          </Swipeable>
        </Provider>
        <style jsx global>
          {`
            .sticky {
              background-image: url("../../static/images/bg.jpg");
            }
          `}
        </style>
      </div>
    );
  }
}
