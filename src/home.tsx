/*
* This file demonstrates a basic ReactXP app.
*/

import RX = require('reactxp');
import axios from 'axios';
import xml2js = require('xml2js');

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
    }),
    fluxImage: RX.Styles.createImageStyle({
        width:500,
        height:500
    }),
};

interface HomeProps {
    onNavigateBack: () => void;
}

interface ImageState {
    xmlData: any[]
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
        axios.get('https://www.sciencedaily.com/rss/space_time.xml')
        .then((res) => {
            let parseString = xml2js.parseString;
            parseString = (res.data, ((result: any) => {
            const news = result.rss.channel[0].item;
                this.setState({
                    xmlData: news
                });
            }))
         })
        }

      private _onPressBack = () => {
        this.props.onNavigateBack();
    }


    render(): JSX.Element | null {
        return (
               
             <RX.View style={ styles.container }>
                    {this.state.xmlData.map((obj) => {
                        const newsTitle = obj.title.toString().substring(0,35) + "..."
                    return (
                        <RX.View style={ styles.container } key={obj.title}>
                            <RX.Link style={ styles.docLink } url={obj.link}></RX.Link>
                        </RX.View>
                    )
                    })}
                     <RX.Animated.Text style={ [styles.helloWorld, this._animatedStyle] }>
                    Space Weather!
                </RX.Animated.Text>
                <RX.Text style={ styles.welcome }>
                    Overview
                </RX.Text>
            </RX.View>
                //<RX.Image style={styles.fluxImage} source={this.state.image} />
        );
    }
}

export = Home;