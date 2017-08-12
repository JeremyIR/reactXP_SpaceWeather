/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import { Component, Styles, Text, View, Linking, Button, Link} from "reactxp";
import axios from 'axios';
import SyncTasks = require('synctasks');
import { createIconStyle } from './icon_base';
import { FacebookIcon } from "./facebook";
import { styles } from './styles';

const newStyles = {
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
    }, 
),
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
    //Opens facebook URL, but in a new tab
    /*    RX.Linking.openUrl([
      'https://graph.facebook.com/oauth/authorize',
      '?response_type=token',
      '&scope=email',
      '&client_id='+'1597853887207086',
      '&redirect_uri=http://localhost:8000/'
    ].join(''));
    */

    //Opens facebook URL in same tab
        window.open(([
        'https://graph.facebook.com/oauth/authorize',
        '?response_type=token',
        '&scope=email',
        '&client_id='+'1597853887207086',
        '&redirect_uri=http://localhost:8000/'
        ].join('')), "_self"); 
  }

    componentDidMount() {
        const _handleURL =function(event: { url: string }) {
        const location = window.location.href;
        const facebookToken = location.split('#')[1].split('=')[1].split('&')[0];

        return  axios.post('http://localhost:8000/v1/facebook_auth', {token: facebookToken})
        .then((response) => { 
            const token = response.data.token; 
        });
     }

       // window.addEventListener('url', _handleURL.bind(this));
        RX.Linking.getInitialUrl()
        .then(function(url: string) {
            _handleURL({url});
         })
    }

  render() {
    return (
      <View style={newStyles.container}>
          <h1>FDA Recall</h1>
          <Button style={styles.facebook_button} onPress={this._facebookLogin}>
                <FacebookIcon style={styles.facebook_icon} /> 
                <RX.Text style={styles.facebook_button_text}>Continue with Facebook</RX.Text>
            </Button>
      </View>
    );
  }
}

export = App;
