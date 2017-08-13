/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import axios from 'axios';
import "whatwg-fetch"; 
import xml2js = require('xml2js');
import { GenericRestClient } from 'simplerestclients';

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
        color: 'green'
    }),
    fluxImage: RX.Styles.createImageStyle({
        width:500,
        height:500
    }),
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    })
};

interface HomeProps {
    onNavigateBack: () => void;
}

interface ImageState {
    xmlData: any
}

class Home extends RX.Component<HomeProps, ImageState> {
    private _navigator: RX.Navigator;
    private _translationValue: RX.Animated.Value;
    private _animatedStyle: RX.Types.AnimatedTextStyleRuleSet;

    constructor() {
        super();

       /*  this.state = {
         image: 'http://services.swpc.noaa.gov/images/swx-overview-large.gif'
        } */

         this.state = {
         xmlData: []
        } 

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
       /* let animation = RX.Animated.timing(this._translationValue, {
              toValue: 0,
              easing: RX.Animated.Easing.OutBack(),
              duration: 500
            }
        );
        animation.start();
        */
        
       axios.get('/v1/news').then((res) => {
           this.setState({ xmlData: res.data });
           console.log(this.state.xmlData)
        })
    
 }
      private _onPressBack = () => {
        this.props.onNavigateBack();
    }
 /* 

*/

    render(): JSX.Element | null {
        return (
               
             <RX.ScrollView style={ styles.scroll }>
                 {this.state.xmlData.map((obj: any) => {
                    const newsTitle = obj.title.toString().substring(0,35) + "...";
                    const newsDesc = obj.description.toString();
                    return (
                        <RX.View>
                         <RX.View key={obj.title}>
                            <RX.Link style={ styles.docLink } url={obj.link}>{newsTitle}</RX.Link>
                        </RX.View>
                        <RX.View key={obj.description}>
                            <RX.Text style={ styles.instructions }>{newsDesc}</RX.Text>
                        </RX.View>
                        </RX.View>
                    )
                    })}
            </RX.ScrollView>
                //<RX.Image style={styles.fluxImage} source={this.state.image} />
        );
    }
}

export = Home;