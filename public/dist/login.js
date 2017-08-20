/*
* This file demonstrates a basic ReactXP app.
*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var newStyles = {
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
var Login = (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        /*const _handleURL = function(event: { url: string }) {
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
      }*/
        _this._onPressNavigate = function () {
            _this.props.onPressNavigate();
        };
        _this.state = {
            image: 'https://i.kinja-img.com/gawker-media/image/upload/s--e2NbN6DU--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/ncdfbvnn3xv0i558vr92.jpg'
        };
        return _this;
    }
    /*public _facebookLogin() {
      const url = ["https://graph.facebook.com/oauth/authorize", "?response_type=token", "&scope=email", "&client_id=" + "1597853887207086", "&redirect_uri=http://localhost:8000/"].join("")
      
      //Opens facebook URL in same tab
      window.open(url, "_self");
    }
  */
    Login.prototype.componentDidMount = function () {
        /*const _handleURL = function(event: { url: string }) {
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
      }*/
    };
    Login.prototype.render = function () {
        return (RX.createElement(RX.View, { style: newStyles.container },
            RX.createElement(RX.Button, { onPress: this._onPressNavigate },
                RX.createElement(RX.Text, null, "Continue with Facebook"))));
    };
    return Login;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
//# sourceMappingURL=login.js.map