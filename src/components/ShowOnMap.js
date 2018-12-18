import React,{Component} from 'react';
import { Platform, StyleSheet,Text,View,Dimensions,TextInput,Button} from 'react-native';
import MapView, {Polyline, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './Styles';
import Geocoder from  'react-native-geocoding';
// import Geocoder from 'react-native-geocoder'



    

const GOOGLE_MAPS_APIKEY='AIzaSyCPYfeFMC0IyLdGOD0_vwzao_XCLGCnzmk';
export default class ShowByNumber extends Component {
    static navigationOptions={
         title:"Your Route",
         headerTitleStyle: {
         fontWeight: "bold",
         color: "black",
         fontSize:20,
         marginLeft:0,
         
        },
        };
        constructor(props){
            super(props);
            this.state={
                data:[],
                data2:[],
            }
        
        }

         componentWillMount(){
             console.log("-----",this.props.navigation.state.params.data)
             for (i in this.props.navigation.state.params.data){
                 if (i!="bus"){
                     this.getData(this.props.navigation.state.params.data[i])
            
                    }
                
             }
             for (i=1;i<this.state.data.length-1;i++){
                this.setState({
                    data2:[...this.state.data,this.state.data[i]]
                })
             }
             

             
         }




        getData(arg){

            Geocoder.from(arg)
                    .then(json => {
                        const location = json.results[0].geometry.location;
                        let _locData={
                            latitude: location.lat,
                            longitude: location.lng
                        }
                        this.setState({
                            data:[...this.state.data,_locData],
                        })
                        
                        
                        
                    }).catch(error => console.warn("noooooo location",error));

        
        } 
                         
    
        
    render(){
       
            const _data = this.state.data
            const k=this.state.data.length
        return(
        <View style={styles.container}>
        <MapView initialRegion={{
                latitude: 40.1792,
                longitude: 44.4991,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={styles.map1}>
                <MapView.Marker coordinate={_data[0]}/>
                <MapView.Marker coordinate={_data[k-1]}/>
                <MapViewDirections
                    origin={_data[0]}
                    waypoints={this.state.data2}
                    destination={_data[k-1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="red"
                  />

                
                

        </MapView>
        </View>
        );
        }}
        
    
    
