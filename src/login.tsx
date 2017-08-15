/*
* This file demonstrates a basic ReactXP app.
*/

import * as RX from "reactxp";
import axios from "axios";
import SyncTasks = require("synctasks");
import { createIconStyle } from "./icon_base";
import { FacebookIcon } from "./facebook";
import { styles } from "./styles";
import News = require("./news");

const newStyles = {
  container: RX.Styles.createViewStyle({
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "#f5fcff"
  }),
   image: RX.Styles.createImageStyle({
    flex: 1
  }),
  helloWorld: RX.Styles.createTextStyle({
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 28
  }),
  welcome: RX.Styles.createTextStyle({
    fontSize: 32,
    marginBottom: 12
  }),
  instructions: RX.Styles.createTextStyle({
    fontSize: 16,
    color: "#aaa",
    marginBottom: 40
  }),
  docLink: RX.Styles.createLinkStyle({
    fontSize: 16,
    color: "blue"
  })
};

interface LoginProps {
  onPressNavigate: () => void;
}

interface LoginState {
  image: any
}


class Login extends RX.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--e2NbN6DU--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/ncdfbvnn3xv0i558vr92.jpg'
    }
  }

  public _facebookLogin() {
    const url = ["https://graph.facebook.com/oauth/authorize", "?response_type=token", "&scope=email", "&client_id=" + "1597853887207086", "&redirect_uri=http://localhost:8000/"].join("")
    
    //Opens facebook URL in same tab
    window.open(url, "_self");
  }

  componentDidMount() {
    const _handleURL = function(event: { url: string }) {
      const location = window.location.href;
      const facebookToken = location.split("#")[1].split("=")[1].split("&")[0];

      axios
        .post("/v1/facebook_auth", { token: facebookToken })
        .then(response => {
          const token = response.data.token;
        });
    };

    // window.addEventListener('url', _handleURL.bind(this));
    RX.Linking
      .getInitialUrl()
      .then(function(url: string) {
        _handleURL({ url });
      })
      .then(() => {
        this._onPressNavigate();
      });
  }

  private _onPressNavigate = () => {
    this.props.onPressNavigate();
  };

  render() {
    return (
      <RX.View style={newStyles.container}>
        <RX.Button style={styles.facebook_button} onPress={this._facebookLogin}>
          <FacebookIcon style={styles.facebook_icon} />
          <RX.Text style={styles.facebook_button_text}>
            Continue with Facebook
          </RX.Text>
        </RX.Button>
      </RX.View>
    );
  }
}

export = Login;
