/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import { Component, Styles, Text, View, Linking, Button} from "reactxp";
import axios from 'axios';
import SyncTasks = require('synctasks');

const styles = {
    container: RX.Styles.createViewStyle({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 40
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue'
    })
};

interface MyProps {
}

interface MyState {
    message: String;
}

class App extends RX.Component<MyProps, MyState> {
    private _translationValue: RX.Animated.Value;
    private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;
 
    constructor(props: MyProps ) {
    super(props);
    this.state = { 
        message: 'Hi'
     };
    this._translationValue = new RX.Animated.Value(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    
    }

    public _facebookLogin() {
    return RX.Linking.openUrl([
      'https://graph.facebook.com/oauth/authorize',
      '?response_type=token',
      '&scope=email',
      '&client_id='+'1597853887207086',
      '&redirect_uri=http://localhost:8000/'
    ].join(''));
  }

    componentDidMount() {
     const _handleURL = function(event: { url: string }) {
       console.log(window.location.href.split('#')[1].split('=')[1].split('&')[0]);
        //console.log(event.url.split('#')[1].split('=')[1].split('&')[0]);
        const location = window.location.href;
    const facebookToken = location.split('#')[1].split('=')[1].split('&')[0];
    return  axios.post('http://localhost:8000/v1/facebook_auth', {token: facebookToken})
      .then((response) => { const token = response.data.token; });
    }
      window.addEventListener('url', _handleURL.bind(this));
      RX.Linking.getInitialUrl().then(url => _handleURL({url}));
    }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._facebookLogin}>
          <Text style={styles.welcome}>
            Facebook Login!
          </Text>
        </Button>
      </View>
    );
  }
}

export = App;
