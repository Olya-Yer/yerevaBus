/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button,ScrollView, Dimensions, View,} from 'react-native';
import FromInput from './FromInput';
import SplashScreen from 'react-native-splash-screen';
import MapView from 'react-native-maps';
import { StackNavigator } from 'react-navigation';
import {connect} from  'react-redux';
import {seachBuslist} from '../actions/routes';
import styles from './Styles';
const {width, height} =Dimensions.get('window')
const SCREEN_HEIGHT =height
const SCREEN_WIDTH = width
const ASPECT_RATIO= width/height
const LATTITUDE_DELTA= 0.0922
const LONGTITUDE_DELTA=LATTITUDE_DELTA*ASPECT_RATIO

class App1 extends Component{

constructor(props){
    super(props);
            this.state= {
            initialPosition:{
                latitude:0,
                longitude:0,
                latitudeDelta:0,
                longitudeDelta:0
             },
            markerPosition:{
                latitude:0,
                longitude:0
                }
         }
}
watchID: ?number = null
componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) =>{
        this.setState({initialPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA,
        }});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({markerPosition: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATTITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA,
        }});

    },
);
    
    SplashScreen.hide();
    this.props.navigation.setParams({handleButton:this.busesNumbers})
};


static navigationOptions =({navigation})=>{
    const{params={}}=navigation.state
        return{
            title:'Welcome',
            headerTitleStyle: {
            fontWeight: "bold",
            color: "black",
            fontSize:20,
            marginLeft:0,
            alignItems: 'center',
            justifyContent: 'center'
            },
        headerRight: <Button onPress={()=>params.handleButton()} title='Buses' color="black" />
    }
}
 
busesNumbers=()=>{
    this.props.seachBuslist()
    this.props.navigation.navigate('Forth')
}
render() {

    return (
        
        
        <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled" style={styles.container}>

        <MapView 
            
          region={this.state.initialPosition}
          showsUserLocation={true}
          followUserLocation={true}
          showsMyLocationButton={true}
            style={styles.map}>
                      <MapView.Marker
            coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
                <View style={styles.marker}>
                </View>
               

            </View>
          </MapView.Marker>
        </MapView>

        <FromInput navigation={this.props.navigation} markerPosition={this.state.markerPosition}/>
        </ScrollView>
  
        
    );
    }
}

function mapStateToProps(state){
    return {
        busRoutesReducer: state.BusRoutes
    }
}


export default connect(mapStateToProps,{seachBuslist})(App1);

