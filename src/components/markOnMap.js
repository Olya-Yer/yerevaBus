import React,{Component} from 'react';
import {View , StyleSheet,Button} from 'react-native';
import MapView from 'react-native-maps';
import styles from './Styles';

export default class markOnMap extends Component<Props>{
    static navigationOptions =({navigation})=>{
        const{params={}}=navigation.state
            return{
                title:'Mark',
                headerTitleStyle: {
                fontWeight: "bold",
                color: "black",
                fontSize:20,
                marginLeft:0,
                },
            headerLeft: <Button onPress={()=>params.handleButton()} title='Done' color="blue" />

        }
    }
    constructor(props){
        super();
        this.state= {
            From:"Current Location",
            To:"",
            fromMarker:{
                latitude:0,
                longitude:0,
            },
            toMarker:{
                latitude:0,
                longitude:0,
            }
         }
     }
     componentDidMount(){

        this.props.navigation.setParams({handleButton:this.setMarker})
     }
     componentWillReceiveProps(nextProps){
        this.setState({
            fromMarker:this.props.navigation.state.params.fromMarker,
            toMarker:this.props.navigation.state.params.toMarker

        })
     }
     onRegionChange(region) {
         if (this.props.navigation.state.params.status==0){
            this.setState({
                fromMarker: region,               
              });
         }
         else{
            console.log("999",this.props.navigation.state.params.status)
            this.setState({
                toMarker: region,               
              });
         }

      }
      setMarker=()=>{
        if (this.props.navigation.state.params.status==0){
            this.props.navigation.state.params.getData(this.state.fromMarker)
            this.props.navigation.navigate('First')
        }
        else{
            this.props.navigation.state.params.getData(this.state.toMarker)
            this.props.navigation.navigate('First')
        }
    }
     onMapPress(e) {
        console.log(e.nativeEvent.coordinate.longitude,e.nativeEvent.coordinate.latitude);
      
        let region = {
          latitude:       e.nativeEvent.coordinate.latitude,
          longitude:      e.nativeEvent.coordinate.longitude,
        }
        this.onRegionChange(region);
      }

render(){
    return (
       <View style={styles.container}>
            <MapView initialRegion={{
                latitude: 40.1792,
                longitude: 44.4991,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={styles.map1}
                onPress={this.onMapPress.bind(this)}>
                <MapView.Marker coordinate={this.state.fromMarker} 
			pinColor='green'/>
                <MapView.Marker coordinate={this.state.toMarker}/>

            </MapView>
        </View>
    );
    }
}