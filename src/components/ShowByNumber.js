import React,{Component} from 'react';
import {TouchableHighlight, Platform,FlatList, StyleSheet,Dimensions,Text,View,TextInput,Button} from 'react-native';
import ToInput from './ToInput';
import ToSearchButton from './ToSearchButton';
import FromInput from './FromInput';
import {connect} from  'react-redux';
import {seachBuslist,getBusTrack} from '../actions/routes';
import Icon from "react-native-vector-icons/MaterialIcons";




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
var count=0
 class ShowByNumber extends Component{
    
        static navigationOptions =({navigation})=>{
            const{params={}}=navigation.state
                return{
                    title: 'Buses',
                    headerTitleStyle: {
                    fontWeight: "bold",
                    color: "black",
                    fontSize:20,
                    marginLeft:0,
                    },

                headerRight: <TextInput style={styles.text} placeholder="number"  onChangeText={(text)=>params.handleButton(text)} />
                                    
            }
        }
    constructor(props){
            super(props);
        this.state={
            data:[],
            data2:[],
            number:"",
            reserve_data:[],
            data3:[]
            
        }
        this.renderBusListArray = this.renderBusListArray.bind(this)
        this.sendTheID=this.sendTheID.bind(this)
        this.handelerChange=this.handelerChange.bind(this)
    }
    renderItem=({item,index})=>{
        if (count==Object.keys(this.props.busReducer).length){
            count=0
        }
        
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
               count+=1
                var i=count-1;
               return <View style ={styles.bar6}>
                  <TouchableHighlight  onPress={()=>this.sendTheID(this.state.data[i])} style={styles.Viewstyle}>
                    <Text >View</Text></TouchableHighlight>
                    </View>
                }
            
           
        };
    componentDidMount(){

        this.props.navigation.setParams({handleButton:this.handelerChange})
        this.props.navigation.setParams({handleButton1:this.busesNumbers})
    };
    
    handelerChange(text){
        console.log("text",text)
        this.setState({number:text},function(){
            console.log("number",this.state.number)
            if (this.state.number){
                console.log("reserve_data",this.state.reserve_data)
                for (i=0;i<this.state.reserve_data.length;i+=3){
                    console.log("this.state.data3 before equal",this.state.data3)
                    if (this.state.reserve_data[i].key==Number.parseInt(this.state.number,10)){
                        console.log("reserve",this.state.reserve_data[i].key)
                        console.log("reserve i+1",this.state.reserve_data[i+1])
                        console.log("this.state.data3",this.state.data3)
                         this.setState({
                            data3:[...this.state.data3,this.state.reserve_data[i],this.state.reserve_data[i+1]],
                        })
                        console.log("data3--",this.state.data3)
                        
                    }
                   
                }
            }
            else{
                this.setState({
                    data3:this.state.reserve_data
                })
            }
            this.setState({
                data2:this.state.data3
            })
        })
    }

    sendTheID(arg){
        this.props.getBusTrack(arg)
        this.props.navigation.navigate('Third')
    }
    componentWillReceiveProps(nextProps){
        const _payload = nextProps.busReducer
        console.log("-1234-1234",this.props.busReducer.payload)
        if(_payload !== this.props.busReducer){
            this.renderBusListArray(_payload)   
        }

    }

    renderBusListArray(payload){
        let result = []
        var k=Object.keys(payload).length
        var data2 = Array.apply(null, Array(2*k));

        for (i=0;i<data2.length;i++){
            data2[i]=1;
        }
        console.log("--213--",data2)
        j=1
        for (i in payload){
              this.setState({
                data:[...this.state.data,payload[i].bus_id]
            })
            console.log("payload--",payload[i])
            this.state.data.push(payload[i].bus_id)
            data2[j]=payload[i].bus_type
            data2[j-1]=payload[i].bus_number
            j+=2
        }
        console.log("--1111--",this.state.data)
        data2.map((item,key)=>{
            return (
                result.push({"key":item})
            )
        })
        console.log("result--",result)
        this.setState({
            data2:result,
            reserve_data:result
        })

    }

    render(){
        return(
            <View style={styles.container}>
           
                <View style={styles.barcontainer}>
                    <View style={styles.bar1}>
                        <Text style={styles.timestyle}>Bus#</Text>
                    </View>
                    <View style={styles.bar2}>
                        <Text style={styles.Busstyle}>Type</Text>
                    </View>
                    <View style={styles.bar3}>
                        <Text style={styles.Viewstyle}>Map</Text>
                    </View>
                </View>
                <FlatList style={styles.flatcontainer}
                data={formatData(this.state.data2)}
                
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
    height:30,
    top:5,
    left:5,
    
    },

  flatcontainer: {
    flex: 1,
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
    borderLeftColor:'black',
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


text:{
    width:30,
    height:30,
    backgroundColor:"white",
    borderWidth:2,
    borderColor:"grey",
    right:10,
    textAlign:'center'

    
},
headersearch:{
    flexDirection:'row'
}

  



});
function mapStateToProps(state){
    return {
        busReducer: state.BusReducer
    }
}


export default connect(mapStateToProps,{seachBuslist,getBusTrack})(ShowByNumber);