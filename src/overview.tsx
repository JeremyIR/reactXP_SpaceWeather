import * as RX from "reactxp";
import axios from "axios";
import * as myStyles from "./styles";

const styles = {
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

interface OverViewProps {
  //onNavigateBack: () => void;
  onViewForcast: () => void;
}

interface OverViewState {
  image: any;
  bg: any;
}

class Overview extends RX.Component<OverViewProps, OverViewState> {
  private _navigator: RX.Navigator;

  constructor() {
    super();

    this.state = {
      image: "http://services.swpc.noaa.gov/images/swx-overview-large.gif",
      bg: 'https://i.kinja-img.com/gawker-media/image/upload/s--e2NbN6DU--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/ncdfbvnn3xv0i558vr92.jpg'
    };
  }

  componentDidMount() {}

  /*
  private _onPressBack = () => {
    this.props.onNavigateBack();
  };*/

  private _onPressViewForcast = () => {
      this.props.onViewForcast();
  }

  render(): JSX.Element | null {
    return (
        <RX.View style={styles.container}>
          <RX.Button style={myStyles.styles.action_button} onPress={ this._onPressViewForcast }>                    
              <RX.Text style={myStyles.styles.action_button_text}>
                  Forcast
              </RX.Text>
          </RX.Button>
        <RX.Image style={styles.fluxImage} source={this.state.image} />
      </RX.View>
    );
  }
}

export default Overview;
