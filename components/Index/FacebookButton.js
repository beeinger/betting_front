import React from "react";
import FacebookLogin from "react-facebook-login";
import { Button } from "react-bootstrap";
import Router from "next/router";

class FacebookButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: false,
      facebookData: false,
      api_address: "https://stark-retreat-68154.herokuapp.com/facebook"
    };
    this.facebookHandler = this.facebookHandler.bind(this);
  }

  componentDidMount() {
    this.facebookHandler("startup");
  }

  facebookHandler(status) {
    if (status === "logout") {
      this.setState({
        response: false,
        facebookData: false
      });
    } else {
      setTimeout(async () => {
        if (window.FB) {
          var fbdata = await window.FB.getAuthResponse();
          if (fbdata && "accessToken" in fbdata) {
            if (window.sessionStorage.getItem("facebookData") !== fbdata) {
              window.sessionStorage.setItem(
                "facebookData",
                JSON.stringify(fbdata)
              );
              Router.push("/home");
              var respo = false;
              fetch(this.state.api_address, {
                method: "post",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(fbdata)
              }).then(async function(res) {
                respo = await res.json();
              });
              if (respo && respo !== this.state.response) {
                this.setState({ response: respo });
              }
            }
          }
        }
      }, 100);
    }
  }

  render() {
    return (
      <div>
        {/* https://www.npmjs.com/package/react-facebook-login - for info about editting */}

        <FacebookLogin
          appId="2173246342969843"
          autoLoad={true}
          fields="name,email"
          scope="public_profile,user_friends,email,user_birthday"
          callback={() => this.facebookHandler("login")}
        />
      </div>
    );
  }
}

export default FacebookButton;
