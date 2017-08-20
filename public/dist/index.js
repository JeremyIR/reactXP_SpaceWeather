"use strict";
//import "core-js/es6/promise";
var RX = require("reactxp");
var App_1 = require("./App");
var react_native_1 = require("react-native");
RX.App.initialize(true, true);
RX.UserInterface.setMainView(RX.createElement(App_1.default, null));
react_native_1.AppRegistry.registerComponent('helloworld', function () { return App_1.default; });
//# sourceMappingURL=index.js.map