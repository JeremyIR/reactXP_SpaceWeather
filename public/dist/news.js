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
        marginLeft: 90,
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
var News = (function (_super) {
    __extends(News, _super);
    function News() {
        var _this = _super.call(this) || this;
        _this._onPressViewForcast = function () {
            _this.props.onViewForcast();
        };
        _this.state = {
            xmlData: []
        };
        return _this;
    }
    News.prototype.componentDidMount = function () {
        var _this = this;
        axios_1.default.get("/v1/news").then(function (res) {
            _this.setState({ xmlData: res.data });
        });
    };
    /* private _onPressViewOverview = () => {
      this.props.onViewOverview();
    }
  */
    News.prototype.render = function () {
        return (RX.createElement(RX.ScrollView, { style: styles.scroll },
            RX.createElement(RX.Button, { style: myStyles.styles.action_button, onPress: this._onPressViewForcast },
                RX.createElement(RX.Text, { style: myStyles.styles.action_button_text }, "Forcast")),
            this.state.xmlData.map(function (obj) {
                var newsTitle = obj.title.toString();
                var newsDesc = obj.description.toString();
                return (RX.createElement(RX.View, { style: styles.container },
                    RX.createElement(RX.View, { style: myStyles.styles.heading, key: obj.title },
                        RX.createElement(RX.Link, { style: styles.docLink, url: obj.link }, newsTitle)),
                    RX.createElement(RX.View, { style: myStyles.styles.paragraph, key: obj.description },
                        RX.createElement(RX.Text, { style: styles.welcome }, newsDesc))));
            })));
    };
    return News;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = News;
//# sourceMappingURL=news.js.map