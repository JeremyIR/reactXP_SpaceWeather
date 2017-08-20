"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var myStyles = require("./styles");
var styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    background: RX.Styles.createImageStyle({
        flex: 1,
        resizeMode: 'stretch'
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
var Overview = (function (_super) {
    __extends(Overview, _super);
    function Overview() {
        var _this = _super.call(this) || this;
        /*
        private _onPressBack = () => {
          this.props.onNavigateBack();
        };*/
        _this._onPressViewForcast = function () {
            _this.props.onViewForcast();
        };
        _this.state = {
            image: "http://services.swpc.noaa.gov/images/swx-overview-large.gif",
            bg: 'https://i.kinja-img.com/gawker-media/image/upload/s--e2NbN6DU--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/ncdfbvnn3xv0i558vr92.jpg'
        };
        return _this;
    }
    Overview.prototype.componentDidMount = function () { };
    Overview.prototype.render = function () {
        return (RX.createElement(RX.View, { style: styles.container },
            RX.createElement(RX.Button, { style: myStyles.styles.action_button, onPress: this._onPressViewForcast },
                RX.createElement(RX.Text, { style: myStyles.styles.action_button_text }, "Forcast")),
            RX.createElement(RX.Image, { style: styles.fluxImage, source: this.state.image })));
    };
    return Overview;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Overview;
//# sourceMappingURL=overview.js.map