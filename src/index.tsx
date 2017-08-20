//import "core-js/es6/promise";
import * as RX from "reactxp";
import App from "./App";
import { AppRegistry } from 'react-native';


RX.App.initialize(true, true);
RX.UserInterface.setMainView(<App />);
AppRegistry.registerComponent('helloworld', () => App)
