import RX = require("reactxp");

import MainPanel = require("./login");
import SecondPanel = require("./overview");
import ThirdPanel = require("./forcast");
import FourthPanel = require("./news");

enum NavigationRouteId {
  MainPanel,
  SecondPanel,
  ThirdPanel,
  FourthPanel
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
        routeId: NavigationRouteId.MainPanel,
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
      case NavigationRouteId.MainPanel:
        return <MainPanel onPressNavigate={this._onPressNavigate} />;

      case NavigationRouteId.SecondPanel:
        return <SecondPanel onNavigateBack={this._onPressBack} onShowThirdPanel={ this._onPressViewForcast } />;
        
      case NavigationRouteId.ThirdPanel:
        return <ThirdPanel onNavigateBack={this._onPressBack} onShowFourthPanel={ this._onPressViewNews }/>;

      case NavigationRouteId.FourthPanel:
        return <FourthPanel onNavigateBack={this._onPressBack} />;

    }

    return null;
  };

  private _onPressNavigate = () => {
    this._navigator.push({
      routeId: NavigationRouteId.SecondPanel,
      sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
      customSceneConfig: {
        hideShadow: true
      }
    });
  };

   private _onPressViewForcast = () => {
        this._navigator.push({
            routeId: NavigationRouteId.ThirdPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }
  
   private _onPressViewNews = () => {
        this._navigator.push({
            routeId: NavigationRouteId.FourthPanel,
            sceneConfigType: RX.Types.NavigatorSceneConfigType.FloatFromRight,
            customSceneConfig: {
                hideShadow: true
            }
        });
    }

  private _onPressBack = () => {
    this._navigator.pop();
  };
}

export = App;
