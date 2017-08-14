import RX = require("reactxp");
import axios from "axios";
import * as myStyles from "./styles";

const styles = {
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

interface HomeProps {
  onNavigateBack: () => void;
}

interface ImageState {
  xmlData: any;
}

class Home extends RX.Component<HomeProps, ImageState> {
  private _navigator: RX.Navigator;

  constructor() {
    super();

    this.state = {
      xmlData: []
    };
  }

  componentDidMount() {
    axios.get("/v1/news").then(res => {
      this.setState({ xmlData: res.data });
    });
  }

  private _onPressBack = () => {
    this.props.onNavigateBack();
  };

  render(): JSX.Element | null {
    return (
      <RX.ScrollView style={styles.scroll}>
        {this.state.xmlData.map((obj: any) => {
          const newsTitle = obj.title.toString();
          const newsDesc = obj.description.toString();
          return (
            <RX.View style={styles.container}>
              <RX.View style={myStyles.styles.heading} key={obj.title}>
                <RX.Link style={styles.docLink} url={obj.link}>
                  {newsTitle}
                </RX.Link>
              </RX.View>
              <RX.View style={myStyles.styles.paragraph} key={obj.description}>
                <RX.Text style={styles.welcome}>
                  {newsDesc}
                </RX.Text>
              </RX.View>
            </RX.View>
          );
        })}
      </RX.ScrollView>
    );
  }
}

export = Home;
