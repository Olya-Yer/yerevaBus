import React, {Component} from 'react';
import {TouchableHighlight, Text, View,TextInput, ScrollView} from 'react-native';
import Geocoder from  'react-native-geocoding';
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from './Styles';
import Result from './Result';
import {connect} from  'react-redux';
import {searchByNames} from '../actions/routes';

class FromInput extends Component{
    constructor(props){
        super(props);
        this.state= {
            From:"",
            To:"",
            fr:"from",
            to:"",
            currentStreet: "",
            initialPosition:"",
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
            cancelStatus: 0,
            showCancel2: false, 
            cancelStatus2: 0,
            resultStatus:0,
            to_render_once:0,
         }
         this.getData2=this.getData2.bind(this)
         this.getData = this.getData.bind(this)
         this.goToMark=this.goToMark.bind(this)
         this.goToMark2=this.goToMark2.bind(this)
         this.toggleCancel1=this.toggleCancel1.bind(this)
         this.checkBlur1=this.checkBlur1.bind(this)
         this.handelerChange1=this.handelerChange1.bind(this)
         this.toggleCancel2=this.toggleCancel2.bind(this)
         this.checkBlur2=this.checkBlur2.bind(this)
         this.handelerChange2=this.handelerChange2.bind(this)
         this.removeResult=this.removeResult.bind(this)

     }
     componentWillReceiveProps(nextProps){
        if(this.state.to_render_once<3){
            this.getData(nextProps.markerPosition);
            this.getData2(nextProps.markerPosition)
        }
        this.setState({
            to_render_once:this.state.to_render_once+1,
        })
      
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
     getData(arg)
     {
         Geocoder.setApiKey('AIzaSyCPYfeFMC0IyLdGOD0_vwzao_XCLGCnzmk');
         Geocoder.getFromLatLng(arg.latitude,arg.longitude).then(
             json=>{
                var address_component = json.results[0].address_components;
                var str = address_component[0].short_name.replace("/", ".");   
                console.log("--44--",json.results ) 
                var number="";
                if (this.state.status==0){
                    for (i=0;i<address_component.length;i++){
                        str=address_component[i].short_name
                        str1= address_component[i].short_name.replace("/", ".")
                        if (!isNaN(str1) || (str.length<5)){
                            var number=address_component[0].short_name;
                        }
                        else{
                            this.setState({
                                From: address_component[i].short_name + " " + number,
                                currentStreet: address_component[i].short_name + " " + number,
                                fromMarker:arg, 
                            }) ;
                            break;
                        }  
                    }
                    error =>{
                        alert(error);
                    }
                }  
                else{
                    for (i=0;i<address_component.length;i++){
                        console.log(i,address_component.length)
                        str=address_component[i].short_name
                        str1= address_component[i].short_name.replace("/", ".")
                        if (!isNaN(str1) || (str.length<5)){
                            var number=address_component[0].short_name;
                        }
                        else{
                            this.setState({
                                To: address_component[i].short_name + " " + number,
                                toMarker:arg, 
                            }) ;
                            break;
                        }  
                    } 
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
            this.setState({
                resultStatus:1
            })
            const args={
                from: this.state.From,
                to: this.state.To
            }
            this.props.searchByNames(args)
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
 
    
    toggleCancel1() {
        if(this.state.From!=""){
            this.setState({
                showCancel: true,
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
    handelerChange1(text){
        this.setState({From:text},function(){
            this.toggleCancel1()
        });

    }
    checkBlur1(){
        if(this.state.cancelStatus==1){
            this.setState({
                showCancel: false,
                cancelStatus:0,
            });
        }
        if (this.state.From==""){
            this.setState({
                From:this.state.initialPosition
            })
        }
        
        
    }

    _renderCancel1() {
        if (this.state.showCancel) {
            return (
                <View style={styles.onMap3}>
                    <Icon name="clear" size={12} color="#f8f8ff" style={styles.onMap4}
                    onPress={()=>this.setState({From:""})}/>
                </View>
            );
        } 
        else {
            return null;
        }
    }
    toggleCancel2() {
        if(this.state.To!=""){
            this.setState({
                showCancel2: true,
                cancelStatus2:1,
            });
        }
        else {
            this.setState({
                showCancel2: false,
                cancelStatus2:0,
            });
        }
        
    }
    handelerChange2(text){
        this.setState({To:text},function(){
            this.toggleCancel2()
        });
    }
    checkBlur2(){
        if(this.state.cancelStatus2==1){
            this.setState({
                showCancel2: false,
                cancelStatus2:0,
            });
        }
        
        
    }

    _renderCancel2() {
        if (this.state.showCancel2) {
            return (
                <View style={styles.onMap5}>
                    <Icon name="clear" size={12} color="#f8f8ff" style={styles.onMap4}
                    onPress={()=>this.setState({To:""})}/>
                </View>
            );
        } else {
            return null;
        }
    }
    _renderResult(){
        if(this.state.resultStatus==1){

            return(
                <View style={styles.container2}>
               
                    <Result navigation={this.props.navigation} removeResult={this.removeResult.bind(this)}/>
                </View>
            )
        }
    }
    removeResult(){
        this.setState({
            resultStatus:0
        })
    }
      render (){
          return (
            
          <View style={styles.textInputContainer}>
            <View style={styles.textInputContainer2}>
                <Text style={styles.text}>From:</Text>
                <TextInput style={styles.textInput} placeholder="Current Location" 
                    value={this.state.From}
                    onFocus={this.toggleCancel1}
                    onBlur={this.checkBlur1}
                    onChangeText=
                    {this.handelerChange1}
                    >
                </TextInput> 
                <TouchableHighlight style={styles.onMapBorder1}>
                    <Icon name="location-on" 
                            size={28} 
                            style={styles.onMap1}
                            onPress={this.goToMark.bind(this)}/>
                </TouchableHighlight>
                {this._renderCancel1()} 

                
            </View>
            <View style={styles.textInputContainer1}>
                <Text style={styles.text1}>To:</Text>
                <TextInput style={styles.textInput1} placeholder="where to?" 
                    value={this.state.To}
                    onFocus={this.toggleCancel2}
                    onBlur={this.checkBlur2}
                    onChangeText={this.handelerChange2}>                            
                </TextInput> 
                <TouchableHighlight style={styles.onMapBorder2}>

                    <Icon name="location-on" 
                        size={28} 
                        style={styles.onMap}
                        onPress={this.goToMark2.bind(this)}/>
                </TouchableHighlight>
                {this._renderCancel2()} 
                
            </View>
            <View style={styles.search}>
                <TouchableHighlight onPress={this.checkDestination.bind(this)} underlayColor="transparent">
                        <View >
                            <Icon name="search" size={25}/>
                        </View>
                </TouchableHighlight>
            </View>
            {this._renderResult()}

        </View>
        )
       }
   } 
   function mapStateToProps(state){
       return {
           busRoutesReducer: state.BusRoutes
       }
   }
   
   
export default connect(mapStateToProps,{searchByNames})(FromInput);

