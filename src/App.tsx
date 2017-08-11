/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import { Component, Styles, Text, View } from "reactxp";
import axios from 'axios'

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

     componentDidMount() {
        axios.get(`/users`)
        .then(json => this.setState({ message: json.data }));
    }

    render() {
        return (
        <div>
        <h2>{this.state.message}</h2>
        </div>
        );
    } 

    /*
    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
              toValue: 0,
              easing: RX.Animated.Easing.OutBack(),
              duration: 500
            }
        );

        animation.start();
    }

    render(): JSX.Element | null {
        return (
            <RX.View style={ styles.container }>
                <RX.Animated.Text style={ [styles.helloWorld, this._animatedStyle] }>
                    Hello World
                </RX.Animated.Text>
                <RX.Text style={ styles.welcome }>
                    Welcome to ReactXP
                </RX.Text>
                <RX.Text style={ styles.instructions }>
                    Edit App.tsx to get started
                </RX.Text>
                <RX.Link style={ styles.docLink } url={ 'https://microsoft.github.io/reactxp/docs' }>
                    View ReactXP documentation
                </RX.Link>
            </RX.View>
        );
    }
    */
}

export = App;
