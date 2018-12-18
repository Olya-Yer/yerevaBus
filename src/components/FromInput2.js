import React, {Component} from 'react';
import {AppRegistry,TouchableHighlight,Dimensions,StyleSheet, Text, View,TextInput} from 'react-native';
import ToSearchButton from './ToSearchButton';
import Icon from "react-native-vector-icons/FontAwesome";

export default class FromInput2 extends Component{
    constructor(){
        super();
        this.state= {
            From:"",
            To:""
         }
     }
    
      render (){
        console.log("--222---",this.state.From)
          return (
          <View style={styles.textInputContainer}>
                      
            <Text style={styles.text}>From:</Text>
                <TextInput style={styles.textInput} placeholder="Current Location"
                value={this.props.parameters.From}
                onChangeText=
            {(From)=>this.setState({From}) }            
            >
            </TextInput> 
            <View style={styles.textInputContainer1}>
                <Text style={styles.text1}>To:</Text>
                    <TextInput style={styles.textInput1} placeholder={this.props.parameters.To}
                    onChangeText={(To) => this.setState({To})}>   
                    
                </TextInput> 
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Second', {To:this.state.To})} underlayColor="transparent">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Search</Text>
                    </View>
                </TouchableHighlight>
            </View>
           </View>
           )
       }
   }
const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: '#f8f8ff',
    height: 50,
    top: 15,
    borderWidth: 0,
    left:5,
    borderWidth: 2,
    borderRadius:20,
    width:"95%" ,
    borderColor: 'grey'
   
    },
    text:{
    top: 12.5,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    left:5
    },
   textInput: {

        color: 'black',
        fontSize: 16,
        left:60,
        padding:0,
        backgroundColor: 'transparent',
        bottom: 8      
    },
  textInputContainer1: {
      
    backgroundColor: '#f8f8ff',
    height: 50,
    top: 10,
    borderWidth: 0,
    left:1,
    borderWidth: 2,
    borderRadius:20,
    width:"101%" ,
    borderColor: 'grey',
    flexDirection:'row'
    },
    text1:{
    top: 12.5,
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    left:5
    },

   textInput1: {
        flex:1,
        color: 'black',
        fontSize: 16,
        left: 7,
        top:2,
        backgroundColor: 'transparent',

    },
    button: {
      width: 100,
      backgroundColor: 'transparent',
      top:1,
      borderLeftWidth:3,
      left:0,
      padding:2,
      width:'100%'
      
    },
    buttonText: {
      flex:1,
      padding: 20,
      marginLeft:0,
      alignItems: 'flex-start',
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',

      bottom:7,
      left:0,
      borderWidth: 0
    }
})
        