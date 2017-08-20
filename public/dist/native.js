/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(0);
var login_1 = __webpack_require__("./src/login.tsx");
var overview_1 = __webpack_require__("./src/overview.tsx");
var forcast_1 = __webpack_require__("./src/forcast.tsx");
var news_1 = __webpack_require__("./src/news.tsx");
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


/***/ }),

/***/ "./src/forcast.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(0);
var axios_1 = __webpack_require__(1);
var myStyles = __webpack_require__("./src/styles.ts");
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


/***/ }),

/***/ "./src/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import "core-js/es6/promise";
var RX = __webpack_require__(0);
var App_1 = __webpack_require__("./src/App.tsx");
var react_native_1 = __webpack_require__(2);
RX.App.initialize(true, true);
RX.UserInterface.setMainView(RX.createElement(App_1.default, null));
react_native_1.AppRegistry.registerComponent('helloworld', function () { return App_1.default; });


/***/ }),

/***/ "./src/login.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
* This file demonstrates a basic ReactXP app.
*/

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(0);
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


/***/ }),

/***/ "./src/news.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(0);
var axios_1 = __webpack_require__(1);
var myStyles = __webpack_require__("./src/styles.ts");
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


/***/ }),

/***/ "./src/overview.tsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RX = __webpack_require__(0);
var myStyles = __webpack_require__("./src/styles.ts");
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


/***/ }),

/***/ "./src/styles.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var RX = __webpack_require__(0);
//import { createIconStyle } from "./icon_base";
// http://paletton.com/palette.php?uid=73H0w0krgXhf-YmlJXR-0VBRLKY
var pallette = {
    primary_0: "#387EF5",
    primary_1: "#8BB3F8",
    primary_2: "#5F97F7",
    primary_3: "#1466F1",
    primary_4: "#0652D4",
    secondary_1_0: "#643DF6",
    secondary_1_1: "#A48EF8",
    secondary_1_2: "#8263F7",
    secondary_1_3: "#4719F2",
    secondary_1_4: "#3307D7",
    secondary_2_0: "#FFD726",
    secondary_2_1: "#FFE883",
    secondary_2_2: "#FFDF52",
    secondary_2_3: "#FFD100",
    secondary_2_4: "#FFD100",
    complement_0: "#FFB126",
    complement_1: "#FFD383",
    complement_2: "#FFC152",
    complement_3: "#FFA400",
    complement_4: "#FFA400"
};
// const iconColors_sections = {
//     a_purple: '#BC403D',
//     b_red: '#852B77',
//     c_orange: '#BC743D',
//     d_orange_yellow: '#BC933D',
//     e_yellow: '#BCB93D',
//     f_yellow_green: '#88B039',
//     g_green: '#419C33',
//     h_teal: '#266F72',
// };
var iconColors_sections = {
    a_purple: "#880088",
    b_red: "#880000",
    c_orange: "#AA4400",
    d_orange_yellow: "#AA6600",
    e_yellow: "#AA8800",
    f_yellow_green: "#668822",
    g_green: "#008800",
    h_teal: "#4466AA"
};
var iconColors_actions = {
    a_purple: "#CC00CC",
    b_red: "#CC0000",
    c_orange: "#FF6600",
    d_orange_yellow: "#FF9900",
    e_yellow: "#FFCC00",
    f_yellow_green: "#99CC33",
    g_green: "#00CC00",
    h_teal: "#6699FF"
};
var pageColors = {
    back_heading_default: "#FFFFFF",
    text_heading_default: pallette.secondary_1_0,
    back_heading1: pallette.primary_4,
    text_heading1: "#FFFFFF",
    back_heading2: "#FFFFFF",
    text_heading2: pallette.primary_0,
    text_listItem: pallette.primary_0
};
exports.colors = __assign({}, pageColors, { actionIcons: iconColors_actions, sectionIcons: iconColors_sections, 
    // BUG: Hex colors don't work
    loader: pallette.primary_0, mini_loader_native: "#FFFFFF", mini_loader_web: pallette.primary_0, mini_loader_background: pallette.primary_1, icon_disabled: "#CCCCCC", text_main: pallette.primary_0, icon_main: pallette.complement_0, back_main: "#FFFFFF", text_modal: pallette.primary_2, back_modal: "#EEEEEE", text_title: pallette.primary_0, text_title_edit: pallette.primary_3, back_title_edit: pallette.secondary_2_1, text_button: "#FFFFFF", back_button_action: pallette.primary_2, back_button_warning: pallette.secondary_1_2, back_button_filter: pallette.secondary_2_2, back_button_nav: pallette.primary_3, text_warning: "#FFFFFF", back_warning: pallette.secondary_1_2, 
    // border_headerBar: pallette.primary_1,
    // back_headerBar: '#EEEEEE',
    // text_search: pallette.primary_2,
    // back_search: '#FFFFFF',
    border_headerBar: pallette.primary_1, back_headerBar: pallette.primary_0, text_search: pallette.primary_1, text_search_placeholder: pallette.primary_2, back_search: pallette.primary_4, border_tabBar: pallette.primary_1, back_tabBar: "#EEEEEE", text_tab: "#888888", text_tab_active: pallette.primary_4, back_page: "#EEEEEE", back_panel: "#FFFFFF", back_sponsored: "#F8F8F8", icon_post: pallette.primary_0, icon_post_action: pallette.secondary_2_0, text_post_title: pallette.primary_0, text_post_subTitle: pallette.primary_1, 
    // icon_post: pallette.secondary_1_0,
    // text_post_title: pallette.secondary_1_0,
    // text_post_subTitle: pallette.secondary_1_1,
    // icon_post: pallette.secondary_2_0,
    // text_post_title: pallette.secondary_2_0,
    // text_post_subTitle: pallette.secondary_2_1,
    text_post_content: "#000000", text_post_content_caption: "#555555", text_post_content_details: "#777777", text_post_info: "#888888", back_post_image: "#000000", border_post_content_section: pallette.secondary_2_1 });
exports.pageSizes = {
    padding_heading_default: 24,
    font_heading_default: 20,
    padding_heading1: 64,
    font_heading1: 36,
    padding_heading2: 36,
    font_heading2: 28,
    marginTop_paragraph: 8,
    marginBottom_paragraph: 8,
    margin_loneLink: 16,
    paddingTop_loneLink: 8,
    paddingBottom_loneLink: 8,
    paddingLeft_loneLink: 24,
    paddingRight_loneLink: 24,
    paddingTop_listItem: 4,
    paddingBottom_listItem: 4,
    paddingLeft_listItem: 8,
    paddingRight_listItem: 8,
    icon_listItem: 12
};
exports.sizes = __assign({}, exports.pageSizes, { 
    // Sizes
    border_tabBar: 1, padding_button_tab: 4, icon_button_tab: 24, font_button_tab: 12, footer_height: 2 * (1 + 4) + 24 + (12 + 2), width_miniLoader: 24, height_appIconImage: 24, width_appIconImage: 24, marginLeft_appIconImage: 4, marginRight_appIconImage: 4, height_appImage: 128, width_appImage: 128, margin_search: 4, padding_search: 4, paddingLeft_search: 8, font_search: 16, icon_search: 16, radius_search: 8, padding_page: 8, marginBottom_panel: 8, padding_panel: 8, paddingLeft_heading: 16, font_heading: 24, padding_action_button: 8, icon_list: 24, icon_post: 36, paddingRight_postIcon: 8, padding_icon_post_action: 2, icon_post_section: 28, icon_post_content: 14, font_post_title: 18, font_post_subTitle: 14, font_post_content: 14, font_post_content_caption: 13, font_post_content_details: 12, font_post_info: 10, font_post_comment: 12, marginLeft_post_section: 8, marginBottom_post_section: 8, marginTop_post_section: 8, image_post_height: 200, font_button: 18, icon_button: 24, font_stats: 24, icon_stats: 28 });
// Default Provider
exports.pageStyles = {
    headings: [
        // Default (No Heading, Heading 3,4,5, etc.)
        {
            section: RX.Styles.createViewStyle({
                padding: exports.sizes.padding_heading_default,
                backgroundColor: pageColors.back_heading_default
            }),
            view: RX.Styles.createViewStyle({}),
            text: RX.Styles.createTextStyle({
                fontSize: exports.sizes.font_heading_default,
                color: pageColors.text_heading_default,
                textAlign: "left",
                fontWeight: "bold"
            })
        },
        // Heading 1
        {
            section: RX.Styles.createViewStyle({
                padding: exports.sizes.padding_heading1,
                backgroundColor: pageColors.back_heading1,
                alignItems: "center"
            }),
            view: RX.Styles.createViewStyle({
                maxWidth: 600
            }),
            text: RX.Styles.createTextStyle({
                fontSize: exports.sizes.font_heading1,
                color: pageColors.text_heading1,
                textAlign: "center",
                fontWeight: "bold"
            })
        },
        // Heading 2
        {
            section: RX.Styles.createViewStyle({
                padding: exports.sizes.padding_heading2,
                backgroundColor: pageColors.back_heading2,
                alignItems: "center"
            }),
            view: RX.Styles.createViewStyle({
                maxWidth: 600
            }),
            text: RX.Styles.createTextStyle({
                fontSize: exports.sizes.font_heading2,
                color: pageColors.text_heading2,
                textAlign: "center",
                fontWeight: "bold"
            })
        }
    ],
    paragraph: RX.Styles.createViewStyle({
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: exports.pageSizes.marginTop_paragraph,
        marginBottom: exports.pageSizes.marginBottom_paragraph
    }),
    text: RX.Styles.createTextStyle({
        flex: -1,
        color: exports.colors.text_main
    }),
    inlineLink: RX.Styles.createButtonStyle({
        backgroundColor: exports.colors.back_button_action,
        paddingLeft: exports.sizes.padding_action_button,
        paddingRight: exports.sizes.padding_action_button
    }),
    inlineLink_text: RX.Styles.createTextStyle({
        flex: -1,
        color: exports.colors.text_button,
        textDecorationLine: "none"
    }),
    loneLink_view: RX.Styles.createViewStyle({
        flexDirection: "row",
        flexWrap: "wrap"
    }),
    loneLink_link: RX.Styles.createButtonStyle({
        flex: 1,
        margin: exports.pageSizes.margin_loneLink,
        paddingTop: exports.pageSizes.paddingTop_loneLink,
        paddingBottom: exports.pageSizes.paddingBottom_loneLink,
        paddingLeft: exports.pageSizes.paddingLeft_loneLink,
        paddingRight: exports.pageSizes.paddingRight_loneLink,
        backgroundColor: exports.colors.back_button_action
    }),
    loneLink_text: RX.Styles.createTextStyle({
        flex: -1,
        color: exports.colors.text_button,
        textDecorationLine: "none",
        textAlign: "center",
        fontSize: exports.sizes.font_button
    }),
    list: RX.Styles.createViewStyle({
        flexDirection: "column"
    }),
    listItem_view: RX.Styles.createViewStyle({
        flexDirection: "row",
        alignItems: "center"
    }),
    listItem: RX.Styles.createTextStyle({
        flex: -1,
        color: pageColors.text_listItem,
        paddingTop: exports.pageSizes.paddingTop_listItem,
        paddingBottom: exports.pageSizes.paddingBottom_listItem,
        paddingLeft: exports.pageSizes.paddingLeft_listItem,
        paddingRight: exports.pageSizes.paddingRight_listItem
    }),
};
exports.styles = __assign({}, exports.pageStyles, { row: RX.Styles.createViewStyle({
        flexDirection: "row"
    }), fullRow: RX.Styles.createViewStyle({
        flexDirection: "row",
        flex: 1
    }), fullColumn: RX.Styles.createViewStyle({
        flexDirection: "column",
        flex: 1
    }), flex1: RX.Styles.createViewStyle({
        flex: 1
    }), flexWrap: RX.Styles.createViewStyle({
        flexWrap: "wrap"
    }), 
    // flexRow_wrap: RX.Styles.createViewStyle({
    //     flex: 1,
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     // alignItems: 'stretch',
    // }),
    // flexWrap: RX.Styles.createViewStyle({
    //     flexWrap: 'wrap',
    // }),
    space_around_content: RX.Styles.createViewStyle({
        alignItems: "center",
        justifyContent: "space-around"
    }), center_content: RX.Styles.createViewStyle({
        alignItems: "center",
        justifyContent: "center"
    }), center_text: RX.Styles.createTextStyle({
        textAlign: "center"
    }), right_content: RX.Styles.createTextStyle({
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    }), loader: RX.Styles.createViewStyle({
        flex: 1,
        backgroundColor: exports.colors.back_modal,
        alignItems: "center",
        justifyContent: "center"
    }), mini_loader: RX.Styles.createViewStyle({
        minWidth: exports.sizes.width_miniLoader,
        minHeight: exports.sizes.width_miniLoader,
        // flex: 1,
        // backgroundColor: colors.back_modal,
        alignItems: "center",
        justifyContent: "center"
    }), mini_loader_container_web: RX.Styles.createViewStyle({
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: exports.colors.mini_loader_background,
        borderRadius: exports.sizes.width_miniLoader
    }), appImage_view: RX.Styles.createViewStyle({
        width: exports.sizes.width_appImage,
        height: exports.sizes.height_appImage
    }), appImage: RX.Styles.createImageStyle({
        width: exports.sizes.width_appImage,
        height: exports.sizes.height_appImage
    }), 
    // Header
    headerBar: RX.Styles.createViewStyle({
        flexDirection: "row",
        flex: 1,
        backgroundColor: exports.colors.back_headerBar,
        borderColor: exports.colors.border_headerBar,
        borderBottomWidth: 1,
        borderStyle: "solid",
        alignItems: "center"
    }), headerBar_appIconImage_view: RX.Styles.createViewStyle({
        width: exports.sizes.width_appIconImage,
        height: exports.sizes.height_appIconImage,
        marginLeft: exports.sizes.marginLeft_appIconImage,
        marginRight: exports.sizes.marginRight_appIconImage
    }), headerBar_appIconImage: RX.Styles.createImageStyle({
        width: exports.sizes.width_appIconImage,
        height: exports.sizes.height_appIconImage
    }), headerButtons: RX.Styles.createViewStyle({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }), searchBox_view: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: exports.sizes.margin_search,
        padding: exports.sizes.padding_search,
        backgroundColor: exports.colors.back_search,
        borderRadius: exports.sizes.radius_search
    }), searchBox_text_placeholder_color: exports.colors.text_search_placeholder, searchBox_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_search,
        color: exports.colors.text_search,
        backgroundColor: "transparent",
        margin: 0,
        paddingLeft: exports.sizes.paddingLeft_search,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1
    }), 
    /*searchIcon: createIconStyle({
      fontSize: sizes.icon_search,
      padding: 0,
      fillColor: colors.text_search
    })*/
    // Footer
    tabBar: RX.Styles.createViewStyle({
        flexDirection: "row",
        flex: 1,
        backgroundColor: exports.colors.back_tabBar,
        borderColor: exports.colors.border_tabBar,
        borderWidth: exports.sizes.border_tabBar,
        borderStyle: "solid"
    }), tab_button: RX.Styles.createButtonStyle({
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: exports.sizes.padding_button_tab
    }), tab_button_active: RX.Styles.createButtonStyle({
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: exports.sizes.padding_button_tab
    }), tab_text: RX.Styles.createTextStyle({
        textAlign: "center",
        fontSize: exports.sizes.font_button_tab,
        color: exports.colors.text_tab
    }), tab_text_active: RX.Styles.createTextStyle({
        textAlign: "center",
        fontSize: exports.sizes.font_button_tab,
        color: exports.colors.text_tab_active
    }), 
    /* tabIcon: createIconStyle({
      fontSize: sizes.icon_button_tab,
      padding: 0,
      fillColor: colors.text_tab
    }),
    tabIcon_active: createIconStyle({
      fontSize: sizes.icon_button_tab,
      padding: 0,
      fillColor: colors.text_tab_active
    })*/
    // Page
    pageBackground: RX.Styles.createViewStyle({
        backgroundColor: exports.colors.back_page
    }), page: RX.Styles.createViewStyle({
        // padding: sizes.padding_page,
        backgroundColor: exports.colors.back_page
    }), 
    // Headings
    heading: RX.Styles.createViewStyle({
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingLeft: exports.sizes.paddingLeft_heading
    }), heading_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_heading
    }), 
    // Actions
    action_button: RX.Styles.createButtonStyle({
        // // flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }), action_button_text: RX.Styles.createTextStyle({
        padding: exports.sizes.padding_action_button,
        backgroundColor: exports.colors.back_button_action,
        color: exports.colors.text_button,
        fontSize: exports.sizes.font_button
    }), facebook_button: RX.Styles.createButtonStyle({
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: exports.colors.back_button_action,
        // backgroundColor: '#3b5998',
        padding: exports.sizes.padding_action_button
    }), facebook_button_text: RX.Styles.createTextStyle({
        color: "#FFFFFF",
        fontSize: exports.sizes.font_button,
        marginLeft: 8
    }), 
    /*facebook_icon: createIconStyle({
      fontSize: sizes.icon_button,
      padding: 0,
      fillColor: "#FFFFFF"
    })*/
    warning_text: RX.Styles.createTextStyle({
        padding: exports.sizes.padding_action_button,
        backgroundColor: exports.colors.back_warning,
        color: exports.colors.text_warning
    }), 
    // List
    /*listIcon: createIconStyle({
      fontSize: sizes.icon_list,
      padding: 0,
      fillColor: colors.icon_main
    })*/
    // Post - Wrapping
    // postList: RX.Styles.createViewStyle({
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    // }),
    // postItem: RX.Styles.createViewStyle({
    //     flex: 1,
    // }),
    // postPanel: RX.Styles.createViewStyle({
    //     flex: 1,
    //     marginRight: sizes.marginBottom_panel,
    //     marginBottom: sizes.marginBottom_panel,
    //     padding: sizes.padding_panel,
    //     backgroundColor: colors.back_panel,
    // }),
    // Post- Normal
    postList: RX.Styles.createViewStyle({}), postItem: RX.Styles.createViewStyle({}), postPanel: RX.Styles.createViewStyle({
        flex: 1,
        marginBottom: exports.sizes.marginBottom_panel,
        padding: exports.sizes.padding_panel,
        backgroundColor: exports.colors.back_panel
    }), sponsored: RX.Styles.createViewStyle({
        backgroundColor: exports.colors.back_sponsored
    }), postContent_wrapper: RX.Styles.createViewStyle({
        flex: 1,
        flexDirection: "column",
        borderColor: exports.colors.border_post_content_section,
        borderStyle: "solid",
        borderLeftWidth: 1,
        borderTopWidth: 1,
        marginTop: 4,
        marginLeft: 4,
        paddingTop: 4,
        paddingLeft: 4,
        minWidth: 150
    }), postIcon_padding: RX.Styles.createViewStyle({
        paddingRight: exports.sizes.paddingRight_postIcon
    }), 
    /* postIcon: createIconStyle({
      fontSize: sizes.icon_post,
      padding: 0,
      fillColor: colors.icon_post
    }),
    postIcon_action: createIconStyle({
      fontSize: sizes.icon_post_section,
      padding: 0,
      fillColor: colors.icon_post_action
    }),
    postIcon_action_disabled: createIconStyle({
      // TODO: Update
      fontSize: sizes.icon_post_section,
      padding: 0,
      fillColor: colors.icon_disabled
    }),
  */
    postTitle_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_title,
        color: exports.colors.text_post_title
    }), postSubTitle_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_subTitle,
        color: exports.colors.text_post_subTitle
    }), postContent_section: RX.Styles.createViewStyle({
        flex: 1,
        marginTop: exports.sizes.marginTop_post_section,
        marginBottom: exports.sizes.marginBottom_post_section,
        marginLeft: exports.sizes.marginLeft_post_section
    }), postContent_section_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_content,
        color: exports.colors.text_post_content
    }), postContent_section_caption_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_content_caption,
        color: exports.colors.text_post_content_caption
    }), postContent_section_details_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_content_details,
        color: exports.colors.text_post_content_details
    }), postContent_action: RX.Styles.createViewStyle({
        padding: exports.sizes.padding_icon_post_action
    }), postInfo_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_info,
        color: exports.colors.text_post_info
    }), postContent_comment_name_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_comment,
        color: exports.colors.text_post_title
    }), postContent_comment_message_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_comment,
        color: exports.colors.text_post_content
    }), postContent_comment_info_text: RX.Styles.createTextStyle({
        fontSize: exports.sizes.font_post_info,
        color: exports.colors.text_post_info
    }), postStats_view: RX.Styles.createViewStyle({
        flex: 1,
        borderStyle: "solid",
        borderColor: exports.colors.border_post_content_section,
        borderTopWidth: 1,
        marginTop: exports.sizes.marginBottom_post_section,
        paddingTop: exports.sizes.marginBottom_post_section
    }), 
    /* postStats_icon: createIconStyle({
       fontSize: sizes.icon_stats,
       padding: 0,
       fillColor: colors.icon_disabled
     }),
     postStats_text: RX.Styles.createTextStyle({
       fontSize: sizes.font_stats,
       padding: 0
     })*/
    // TEMP
    postImage_maxWidth: 375, postImage: RX.Styles.createImageStyle({
        flex: 1
    }), postProfilePicture: RX.Styles.createImageStyle({
        width: 32,
        height: 32
    }) });


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("reactxp");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("react-native");

/***/ })

/******/ });
//# sourceMappingURL=native.js.map