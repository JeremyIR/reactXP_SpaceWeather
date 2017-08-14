import RX = require("reactxp");
import App = require("./App");
import Login = require("./login");
import "whatwg-fetch";
import { AppRegistry } from "react-native";

// For hot reload settings
declare var module: { hot: any };
declare var require: {
  (path: string): any;
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  ensure: (
    paths: string[],
    callback: (require: <T>(path: string) => T) => void
  ) => void;
};

RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
