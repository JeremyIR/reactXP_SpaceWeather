import RX = require("reactxp");

import Login = require("./login");
import OverView = require("./overview");
import Forcast = require("./forcast");
import News = require("./news");

enum NavigationRouteId {
  Login,
  OverView,
  Forcast,
  News
}

const styles = {
  navCardStyle: RX.Styles.createViewStyle({
    backgroundColor: "#f5fcff"
  })
};

class App extends RX.Component<{}, null> {
  private _navigator: RX.Navigator;

  componentDidMount() {
    this._navigator.immediatelyResetRouteStack([
      {
        routeId: NavigationRouteId.Login,
        sceneConfigType: RX.Types.NavigatorSceneConfigType.Fade
      }
    ]);
  }

  render() {
    return (
      <RX.Navigator
        ref={this._onNavigatorRef}
        renderScene={this._renderScene}
        cardStyle={styles.navCardStyle}
      />
    );
  }

  private _onNavigatorRef = (navigator: RX.Navigator) => {
    this._navigator = navigator;
  };

  private _renderScene = (navigatorRoute: RX.Types.NavigatorRoute) => {
    switch (navigatorRoute.routeId) {
      case NavigationRouteId.Login:
        return <Login onPressNavigate={this._onPressNavigate} />;

      case NavigationRouteId.OverView:
        return (
          <OverView
            onNavigateBack={this._onPressBack}
            onViewForcast={this._onPressViewForcast}
            onViewNews={this._onPressViewNews}

          />
        );

      case NavigationRouteId.Forcast:
        return (
          <Forcast
            onViewOverview={this._onPressBack}
            onViewNews={this._onPressViewNews}
          />
        );

      case NavigationRouteId.News:
        return (
            <News onViewForcast={this._onPressBack} 
             onViewOverview={this._onPressBackTwice}
        />
        );
    }

    return null;
  };

  private _onPressNavigate = () => {
    this._navigator.push({
      routeId: NavigationRouteId.OverView,
      sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
      customSceneConfig: {
        hideShadow: true
      }
    });
  };

  private _onPressViewForcast = () => {
    this._navigator.push({
      routeId: NavigationRouteId.Forcast,
      sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
      customSceneConfig: {
        hideShadow: true
      }
    });
  };

  private _onPressViewNews = () => {
    this._navigator.push({
      routeId: NavigationRouteId.News,
      sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
      customSceneConfig: {
        hideShadow: true
      }
    });
  };

  private _onPressBack = () => {
    this._navigator.pop();
  };

    private _onPressBackTwice = () => {
    this._navigator.pop();
    this._navigator.pop();
  };
}


export = App;
