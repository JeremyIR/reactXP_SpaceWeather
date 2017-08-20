"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var axios_1 = require("axios");
var myStyles = require("./styles");
var styles = {
    container: RX.Styles.createViewStyle({
        flex: 0,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#f5fcff"
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 12,
        marginBottom: 12,
        marginRight: 10,
        marginLeft: 20,
        alignSelf: "center"
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: "green"
    }),
    fluxImage: RX.Styles.createImageStyle({
        width: 500,
        height: 500
    }),
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: "center",
        backgroundColor: "#f5fcff",
        width: 1200
    })
};
var Forcast = (function (_super) {
    __extends(Forcast, _super);
    function Forcast() {
        var _this = _super.call(this) || this;
        _this._onPressViewOverview = function () {
            _this.props.onViewOverview();
        };
        _this._onPressViewNews = function () {
            _this.props.onViewNews();
        };
        _this.state = {
            image: ""
        };
        return _this;
    }
    Forcast.prototype.componentDidMount = function () {
        var _this = this;
        axios_1.default.get("/v1/forcast")
            .then(function (res) {
            _this.setState({ image: res.data });
        });
    };
    Forcast.prototype.render = function () {
        return (RX.createElement(RX.ScrollView, { style: styles.scroll },
            RX.createElement(RX.View, null,
                RX.createElement(RX.Button, { style: myStyles.styles.action_button, onPress: this._onPressViewOverview },
                    RX.createElement(RX.Text, { style: myStyles.styles.action_button_text }, "Overview")),
                RX.createElement(RX.Button, { style: myStyles.styles.action_button, onPress: this._onPressViewNews },
                    RX.createElement(RX.Text, { style: myStyles.styles.action_button_text }, "News"))),
            RX.createElement(RX.Text, { style: styles.docLink }, this.state.image)));
    };
    return Forcast;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Forcast;
//# sourceMappingURL=forcast.js.map