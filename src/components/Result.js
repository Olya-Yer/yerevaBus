import React,{Component} from 'react';
import {TouchableHighlight, FlatList, StyleSheet,ScrollView,Text,View,Button} from 'react-native';
import styles from './Styles';
import Icon from "react-native-vector-icons/MaterialIcons";



const data=[{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:2},{key:3},{key:4},{key:5},{key:6},{key:1},{key:2},{key:3},{key:4},{key:5},{key:6},{key:7},{key:2},{key:3},{key:4},{key:5},{key:6},{key:4},{key:5}];
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

export default class ResultPage extends Component<Props>{
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
        constructor(props){
            super();
        this.state={
            enableScrollViewScroll:true
        }
    }

    render(){
        return(
            <View style={styles.container1}>
                 <TouchableHighlight style={styles.button1}>
                    <Icon name="clear" 
                            color="white"
                            size={15} 
                            onPress={()=>this.props.removeResult()}/>
                </TouchableHighlight>
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
                <ScrollView scrollEnabled={true}> 
                <FlatList style={styles.flatcontainer}
                data={formatData(data)}
                
                renderItem={this.renderItem}
                numColumns={numColumns}
                
                />
                </ScrollView>
            </View>

        );
        }
    }
