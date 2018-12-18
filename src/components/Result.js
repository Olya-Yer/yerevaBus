import React,{Component} from 'react';
import {TouchableHighlight, FlatList, StyleSheet,ScrollView,Text,View,Button} from 'react-native';
import styles from './Styles';
import Icon from "react-native-vector-icons/MaterialIcons";
import {connect} from  'react-redux';



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
 class Result extends Component{

        constructor(props){
            super(props);
        this.state={
            enableScrollViewScroll:true,
            data:[],
            data2:[],
        }
        this.renderBusListArray = this.renderBusListArray.bind(this)
    }

     
    renderItem=({item,index})=>{
        if (count==Object.keys(this.props.busRoutesReducer).length){
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
                        
                        <Button onPress={() => this.props.navigation.navigate('Third',{data:this.state.data[i]})} style={styles.Viewstyle} title="View" />
                        </View>
            }
        
        
    };
    componentWillReceiveProps(nextProps){
        const _routes = nextProps.busRoutesReducer

        if(_routes !== this.props.busRoutesReducer){
            this.renderBusListArray(_routes)   
        }

    }

    renderBusListArray(routes){
        let result = []
        var k=Object.keys(routes).length
        var data2 = Array.apply(null, Array(2*k));

        for (i=0;i<data2.length;i++){
            data2[i]=1;
        }
        console.log("--213--",data2)
        j=1
        for (i in routes){
            L=Object.keys(routes[i]).length
            // this.setState({
            //     data:[...this.state.data,routes[i]]
            // })
            console.log("routes-routes",routes[i])
            this.state.data.push(routes[i])
            data2[j]=routes[i].bus
            data2[j-1]=4*(L-1)+" mins"
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
        console.log("data-data",this.state.data)
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
                        <Text style={{fontWeight: "bold",left:0, color: "black", top:5, height:30}}> Est.Time</Text>
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