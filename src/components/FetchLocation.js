import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const FetchLocation = props => {
    return (
        <TouchableHighlight onPress={props.onGetLocation} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Get Location</Text>
        </View>
      </TouchableHighlight>
    ) ;
};
const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    }
  });
  
export default FetchLocation;