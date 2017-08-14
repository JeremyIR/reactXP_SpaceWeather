import RX = require('reactxp');
import axios from 'axios';
import * as myStyles from './styles'

const styles = {
    container: RX.Styles.createViewStyle({
        flex: 0,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#f5fcff'
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 12,
        marginBottom: 12,
        marginRight: 10,
        marginLeft: 20,
        alignSelf: 'center'
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'green'
    }),
    fluxImage: RX.Styles.createImageStyle({
        width:500,
        height:500
    }),
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'center',
        backgroundColor: '#f5fcff',
        width: 1200
    })
};

interface HomeProps {
    onNavigateBack: () => void;
}

interface ImageState {
    image: any
}

class Forcast extends RX.Component<HomeProps, ImageState> {
    private _navigator: RX.Navigator;

    constructor() {
        super();

        this.state = {
         image: ''
        } 
    }

    componentDidMount() {
    axios.get('/v1/forcast')
    .then((res) => {
        this.setState({image: res.data})
    })
 }

      private _onPressBack = () => {
        this.props.onNavigateBack();
    }

    render(): JSX.Element | null {
        return (
                <RX.ScrollView style={ styles.scroll }>
                    <RX.Text style={styles.docLink}>
                        {this.state.image}
                </RX.Text>
                </RX.ScrollView>
        );
    }
}

export = Forcast;