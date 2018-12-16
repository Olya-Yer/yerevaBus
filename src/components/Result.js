import React,{Component} from 'react';
import {TouchableHighlight, FlatList, StyleSheet,ScrollView,Text,View,Button} from 'react-native';
import styles from './Styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import {connect} from  'react-redux';



const data=[{key:1},{key:2},{key:3},{key:4},{key:3},{key:4},{key:5},{key:6},{key:4},{key:5}];
// const data3=[];

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

 class Result extends Component{

        constructor(props){
            super();
        this.state={
            enableScrollViewScroll:true,
            data:[],
            data2:[]
        }
        this.renderBusListArray = this.renderBusListArray.bind(this)
    }

     
    renderItem=({item,index})=>{
        console.log("renderItem",item)
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
    componentWillReceiveProps(){
        // if(_routes !== this.props.busRoutesReducer){
        // }
        this.renderBusListArray()   

    }

    renderBusListArray(){
        let result = []
        console.log("--111--",this.props.busRoutesReducer)
        var k=Object.keys(this.props.busRoutesReducer).length
        var data2 = Array.apply(null, Array(2*k));
        console.log("--213--",data2)
        for (i=0;i<data2.length;i++){
            data2[i]=1;
        }
        console.log("--213--",data2)
        j=1
        for (i in this.props.busRoutesReducer){
            
            data2[j]=this.props.busRoutesReducer[i].bus
            j+=2
        }
        console.log("--213--",data2)
        data2.map((item,key)=>{
            return (
                result.push({"key":item})
            )
        })
        console.log("result--",result)
        this.setState({
            data2:result
        })

    }

    
    render(){
        
        const dt = this.state.data2;
        console.log("--dt--",dt,this.state.data2)
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
                data={formatData(dt)}
                
                renderItem={this.renderItem}
                numColumns={numColumns}
                
                />
                </ScrollView>
            </View>

        );
        }
    }
    function mapStateToProps(state){
        return {
            busRoutesReducer: state.BusRoutes
        }
    }
    
    
    export default connect(mapStateToProps,{})(Result);