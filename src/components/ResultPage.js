import React,{Component} from 'react';
import { Platform,FlatList, StyleSheet,Dimensions,Text,View,TextInput,Button} from 'react-native';
import ToInput2 from './ToInput2';
import ToSearchButton2 from './ToSearchButton2';
import FromInput2 from './FromInput2';

const data=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6}];
const numColumns=3;
const formatData = (data) => {
 var i=0;
 for (i=0;i<data.length;i++){
     if (i%3==2){
         data.splice(i, 0, "random")
         }
}
data.splice(i, 0, "random")
  return data;

};

export default class ResultPage extends Component{
    static navigationOptions={
        title: 'Result',
         headerTitleStyle: {
         fontWeight: "bold",
         color: "black",
         fontSize:20,
         marginLeft:0,
        },
        };
    renderItem=({item,index})=>{

        
           if (index%3==0){
               return <View style ={styles.bar4}>
                            <Text style={styles.timestyle}>{item.key}</Text>
                         </View>
                         }
          else if(index%3==1){
               return <View style ={styles.bar5}>
                            <Text style={styles.Busstyle}>{item.key}</Text>
                         </View>
                         }
           else {
               index=index-1;
               return <View style ={styles.bar6}>
                            <Button onPress={() => this.props.navigation.navigate('Third')} style={styles.Viewstyle} title="View" />
                          </View>
                }
            
           
        };

    render(){
        return(
            <View style={styles.container}>
                <FromInput2 navigation={this.props.navigation} parameters={this.props.navigation.state.params} />
                {/* //navigation={this.props.navigation} parameters={this.props.navigation.state.params} */}
                <View style={styles.barcontainer}>
                    <View style={styles.bar1}>
                        <Text style={styles.timestyle}>Time</Text>
                    </View>
                    <View style={styles.bar2}>
                        <Text style={styles.Busstyle}>Bus(es)</Text>
                    </View>
                    <View style={styles.bar3}>
                        <Text style={styles.Viewstyle}>Map</Text>
                    </View>
                </View>
                <FlatList style={styles.flatcontainer}
                data={formatData(data)}
                
                renderItem={this.renderItem}
                numColumns={numColumns}
                />
            </View>

        );
        }
    }
const styles = StyleSheet.create({

    
  container: {
    flex: 1,  
    backgroundColor:'#ffffe0',
    
    
  },


barcontainer:{
    flex:0,
    top:75,
    height:72,
    backgroundColor:'white',
    flexDirection:'row',
    borderTopWidth:2,
    },
bar1:{
    flex:0,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderRightColor:'black',
    borderLeftColor:'black',
    borderBottomWidth:2,
    borderBottomColor:'black',
    height:30,
    width:70,
    },
bar2:{
    flex:0,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderRightColor:'black',
    borderLeftColor:'black',
    borderBottomWidth:2,
    borderBottomColor:'black',
    height:30,
    width:250
    },
bar3:{
    flex:1,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderRightColor:'black',
    borderLeftColor:'black',
    borderBottomWidth:2,
    borderBottomColor:'black',
    height:30,
    },
timestyle:{
    fontWeight: "bold",
    left:10,
    color: "black",
    top:5,
    height:30,
    },
Busstyle:{
    fontWeight: "bold",
    left:50,
    top:5,
    height:30,
    color: "black",
    },
Viewstyle:{
    fontWeight: "bold",
    height:30,
    color: "black",
    top:5,
    left:5,
    
    },

  flatcontainer: {
    flex: 1,
    top:35,
    backgroundColor:'white',
 
  },
bar4:{
    flex:0,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderRightColor:'grey',
    borderLeftColor:'grey',
    borderBottomWidth:2,
    borderBottomColor:'grey',
    height:50,
    width:70,
    },
bar5:{
    flex:0,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderRightColor:'grey',
    borderLeftColor:'grey',
    borderBottomWidth:2,
    borderBottomColor:'grey',
    height:50,
    width:250
    },
bar6:{
    flex:1,
    borderRightWidth:2,
    borderLeftWidth:2,
    borderRightColor:'grey',
    borderLeftColor:'grey',
    borderBottomWidth:2,
    borderBottomColor:'grey',
    height:50,
    },
timestyle:{
    fontWeight: "bold",
    left:10,
    color: "black",
    top:5,
    height:30,
    },
Busstyle:{
    fontWeight: "bold",
    left:50,
    top:5,
    height:30,
    color: "black",
    },
Viewstyle:{
    fontWeight: "bold",
    height:30,
    color: "black",
    top:5,
    left:5,
    
    },

  



});