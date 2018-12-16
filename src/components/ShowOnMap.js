import React,{Component} from 'react';
import { Platform, StyleSheet,Text,View,Dimensions,TextInput,Button} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import styles from './Styles';
import Geocoder from  'react-native-geocoding';



const coordinates=[
    {
        latitude:40.1930,
        longitude:44.5045,
        },
    {
        latitude:40.1777,
        longitude:44.5127,
        },
    ];
    

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
        componentWillReceiveProps(){
            this.getData(this.props.markerPosition);
           
          
         }
        getData2(arg){
            Geocoder.setApiKey('AIzaSyCPYfeFMC0IyLdGOD0_vwzao_XCLGCnzmk');
            Geocoder.getFromLatLng(arg.latitude,arg.longitude).then(
                json=>{
                    var address_component = json.results[0].address_components;
                    var str = address_component[0].short_name.replace("/", "."); 
                    var number="";
    
                    for (i=0;i<address_component.length;i++){
                        str=address_component[i].short_name
                        str1= address_component[i].short_name.replace("/", ".")
                        if (!isNaN(str1) || (str.length<5)){
                            var number=address_component[0].short_name;
                        }
                        else{
                            this.setState({
                                initialPosition: address_component[i].short_name + " " + number,
                            }) ;
                            break;
                        }  
                    }
                    error =>{
                        alert(error);
                    }
                } 
                         
            )
    
        }
    render(){
        return(
        <View style={styles.container}>
        <MapView initialRegion={{
                latitude: 40.1792,
                longitude: 44.4991,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={styles.map1}>
                
                <MapViewDirections
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="red"
                    />
            </MapView>
        </View>
        );
        }
    }
