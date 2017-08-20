"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = require("reactxp");
var login_1 = require("./login");
var overview_1 = require("./overview");
var forcast_1 = require("./forcast");
var news_1 = require("./news");
var NavigationRouteId;
(function (NavigationRouteId) {
    NavigationRouteId[NavigationRouteId["Login"] = 0] = "Login";
    NavigationRouteId[NavigationRouteId["OverView"] = 1] = "OverView";
    NavigationRouteId[NavigationRouteId["Forcast"] = 2] = "Forcast";
    NavigationRouteId[NavigationRouteId["News"] = 3] = "News";
})(NavigationRouteId || (NavigationRouteId = {}));
var styles = {
    navCardStyle: RX.Styles.createViewStyle({
        backgroundColor: "#f5fcff"
    })
};
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onNavigatorRef = function (navigator) {
            _this._navigator = navigator;
        };
        _this._renderScene = function (navigatorRoute) {
            switch (navigatorRoute.routeId) {
                case NavigationRouteId.Login:
                    return RX.createElement(login_1.default, { onPressNavigate: _this._onPressNavigate });
                case NavigationRouteId.OverView:
                    return (RX.createElement(overview_1.default, { onViewForcast: _this._onPressViewForcast }));
                case NavigationRouteId.Forcast:
                    return (RX.createElement(forcast_1.default, { onViewOverview: _this._onPressBack, onViewNews: _this._onPressViewNews }));
                case NavigationRouteId.News:
                    return (RX.createElement(news_1.default, { onViewForcast: _this._onPressBack }));
            }
            return null;
        };
        _this._onPressNavigate = function () {
            _this._navigator.push({
                routeId: NavigationRouteId.OverView,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
                customSceneConfig: {
                    hideShadow: true
                }
            });
        };
        _this._onPressViewForcast = function () {
            _this._navigator.push({
                routeId: NavigationRouteId.Forcast,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
                customSceneConfig: {
                    hideShadow: true
                }
            });
        };
        _this._onPressViewNews = function () {
            _this._navigator.push({
                routeId: NavigationRouteId.News,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
                customSceneConfig: {
                    hideShadow: true
                }
            });
        };
        _this._onPressBack = function () {
            _this._navigator.pop();
        };
        return _this;
        /* private _onPressBackTwice = () => {
         this._navigator.pop();
         this._navigator.pop();
       };*/
    }
    App.prototype.componentDidMount = function () {
        this._navigator.immediatelyResetRouteStack([
            {
                routeId: NavigationRouteId.Login,
                sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade
            }
        ]);
    };
    App.prototype.render = function () {
        return (RX.createElement(RX.Navigator, { ref: this._onNavigatorRef, renderScene: this._renderScene, cardStyle: styles.navCardStyle }));
    };
    return App;
}(RX.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map