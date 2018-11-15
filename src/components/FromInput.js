import React, {Component} from 'react';
import {AppRegistry,TouchableHighlight,Dimensions,StyleSheet, Text, View,TextInput} from 'react-native';
import ToSearchButton from './ToSearchButton';
import Geocoder from  'react-native-geocoding';
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from './Styles';




export default class FromInput extends Component<Props>{
    constructor(props){
        super();
        this.state= {
            From:"Current Location",
            To:"",
            fr:"from",
            to:"to",
            currentStreet: "",
            initialPosition:{
                latitude:0,
                longitude:0,
             },
            fromMarker:{
                latitude:0,
                longitude:0,
            },
            toMarker:{
                latitude:0,
                longitude:0,
            },
            status: 0,
            showCancel: false, 
            cancelStatus: 0
         }
         this.getData = this.getData.bind(this)
         this.goToMark=this.goToMark.bind(this)
         this.goToMark2=this.goToMark2.bind(this)
         this.toggleCancel=this.toggleCancel.bind(this)
         this.checkBlur=this.checkBlur.bind(this)
     }


     

     componentWillReceiveProps(nextProps){
        this.getData(this.props.markerPosition);
        this.setState({
            initialPosition:this.props.markerPosition
        })
     }
     getData(arg)
     {
         Geocoder.setApiKey('AIzaSyCPYfeFMC0IyLdGOD0_vwzao_XCLGCnzmk');
         Geocoder.getFromLatLng(arg.latitude,arg.longitude).then(
             json=>{
                console.log("------1-----",json.results[0].address_components);
                var address_component = json.results[0].address_components;
                console.log("------2-----",address_component[0].short_name);  
                var str = address_component[0].short_name.replace("/", ".");    
                if (this.state.status==0){
                    if (!isNaN(str)){
                        console.log("------6-----", typeof (address_component[0].short_name))
                        str=str = address_component[1].short_name.replace("/", "."); 
                        if (!isNaN(str)){
                            this.setState({
                                From: address_component[2].short_name+" "+address_component[0].short_name,
                                fromMarkerr: arg,
                            }) ;
                        }
                        else {
                            this.setState({
                                From: address_component[1].short_name+" "+address_component[0].short_name,
                                fromMarker: arg,
                            }) ;
                        }     
                    }
                    
                    else{
                        this.setState({
                            From: address_component[0].short_name,
                            fromMarker:arg, 
                        }) ;
                    }  
                    console.log("------7-----", this.state.marker)            
                    error =>{
                        alert(error);
                    }
                }  
                else{
                    if (!isNaN(str)){
                        str=str = address_component[1].short_name.replace("/", "."); 
                        if (!isNaN(str)){
                            this.setState({
                                to: address_component[2].short_name+" "+address_component[0].short_name,
                                toMarkerr: arg,
                            }) ;
                        }
                        else {
                            this.setState({
                                to: address_component[1].short_name+" "+address_component[0].short_name,
                                toMarker: arg,
                            }) ;
                        }     
                    }
                    
                    else{
                        this.setState({
                            to: address_component[0].short_name,
                            toMarker:arg, 
                        }) ;
                    }  
                    console.log("------7-----", this.state.marker)            
                    error =>{
                        alert(error);
                    }
                }       

             },             
         )
     }

     checkDestination(){
         if(this.state.To==""){
             alert("choose destination")
         }
         else{
            this.props.navigation.navigate('Second', {To:this.state.To, From:this.state.From} )

         }
     }
     goToMark(){
         this.setState({status:0}, function(){
            this.props.navigation.navigate('Fifth',{getData:this.getData.bind(this), fromMarker:this.state.fromMarker,toMarker:this.state.toMarker, status:this.state.status})         
         });


     }

     goToMark2(){
        this.setState({status:1}, function(){
            this.props.navigation.navigate('Fifth',{getData:this.getData.bind(this), toMarker:this.state.toMarker, fromMarker:this.state.fromMarker, status:this.state.status})

        });
    }
    componentDidUpdate(){
        this.toggleCancel
    }
    
    toggleCancel() {
        console.log("yyyy")
        if(this.state.From!=""){
            this.setState({
                showCancel: !this.state.showCancel,
                cancelStatus:1,
            });
        }
        else {
            this.setState({
                showCancel: false,
                cancelStatus:0,
            });
        }
        
    }
    checkBlur(){
        if(this.state.cancelStatus==1){
            this.setState({
                showCancel: !this.state.showCancel,
                cancelStatus:0,
            });
        }
        
        
    }

    _renderCancel() {
        if (this.state.showCancel) {
            return (
                <View style={styles.onMap3}>
                    <Icon name="clear" size={12} color="#f8f8ff" style={styles.onMap4}/>
                </View>
            );
        } else {
            return null;
        }
    }

    
      render (){
          return (
          <View style={styles.textInputContainer}>
            <View style={styles.textInputContainer2}>
                <Text style={styles.text}>From:</Text>
                <TextInput style={styles.textInput} placeholder="Current Location" 
                    value={this.state.From}
                    onFocus={this.toggleCancel}
                    onBlur={this.checkBlur}
                    onChangeText=
                    {(From)=>this.setState({From})}>
                </TextInput> 
                <TouchableHighlight style={styles.onMapBorder1}>
                    <Icon name="location-on" 
                            size={28} 
                            style={styles.onMap1}
                            onPress={this.goToMark.bind(this)}/>
                </TouchableHighlight>
                {this._renderCancel()} 

                
            </View>
            <View style={styles.textInputContainer1}>
                <Text style={styles.text1}>To:</Text>
                <TextInput style={styles.textInput1} placeholder="where to?" 
                    value={this.state.to}
                    onChangeText={(To) => this.setState({To})}>                               
                </TextInput> 
                <TouchableHighlight style={styles.onMapBorder2}>

                    <Icon name="location-on" 
                        size={28} 
                        style={styles.onMap}
                        onPress={this.goToMark2.bind(this)}/>
                </TouchableHighlight>
                <View style={styles.onMap5}>
                    <Icon name="clear" size={12} color="#f8f8ff" style={styles.onMap4}/>
                </View>
            </View>
            <View style={styles.search}>
                <TouchableHighlight onPress={this.checkDestination.bind(this)} underlayColor="transparent">
                        <View >
                            <Icon name="search" size={25}/>
                        </View>
                </TouchableHighlight>
            </View>
        </View>
        )
       }
   } 