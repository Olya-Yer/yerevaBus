import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    radius:{
        height:50,
        width:50,
        borderRadius:50/2,
        backfaceVisibility:'hidden',
        backgroundColor:'rgba(0,122,255,0.1)',
        borderColor:'rgba(0,122,255,0.3)',
        alignItems:'center',
        justifyContent:'center'
    },
    marker:{
        height:20,
        width:20,
        borderColor:'white',
        borderRadius:20/2,
        backgroundColor:'#007AFF'
    },
    
    container: {
        flex: 1,     
    },
    map:{
        left:0,
        right:0,
        top:0,
        bottom:0,
        position:'absolute',
        flex:1,
        height:"1500%"
    },
    map1:{
        left:0,
        right:0,
        top:0,
        bottom:0,
        position:'absolute',
  
    },
    textInputContainer: {
        backgroundColor: '#f8f8ff',
        height: 50,
        top: 15,
        borderWidth: 0,
        left:5,
        borderWidth: 2,
        borderRadius:20,
        width:"85%" ,
        borderColor: 'grey',
        flex:0,
        flexDirection:'column'

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
        paddingTop:6,
        paddingLeft:5,
        flex:0,
        color: 'black',
        fontSize: 16,
        left:1,
        top:-2,
        backgroundColor: 'transparent',
        bottom: 0,
        width:"65%", 
    },
    textInputContainer1: {      
        backgroundColor: '#f8f8ff',
        height: 50,
        borderWidth: 0,
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
        flex:0,
        color: 'black',
        fontSize: 16,
        left: 5,
        top:2,
        width:"70%",
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
    },
    onMap:{
        marginTop:8,
        color:'grey'
    },
    
    onMapBorder1:{
        top:-2,
        left:25,
        borderLeftColor:"grey",
        borderLeftWidth:2,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
        
    },
    onMapBorder2:{
        top:-2,
        left:34,
        borderLeftColor:"grey",
        borderLeftWidth:2,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
        
    },
    onMap1:{
        color:'grey',    
    },
    onMap3:{
        top:17,
        right:25,
        height:16,
        width:16,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        borderRadius: 8,
        backgroundColor: "grey"
    },
    onMap5:{
        top:17,
        right:16,
        height:16,
        width:16,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        borderRadius: 8,
        backgroundColor: "grey"
    },
    onMap4:{
        top:0.8,
        alignSelf:'center',
        left:0.4
    },
    textInputContainer2:{
        flexDirection:'row'

    },
    
    search:{
        flex:0,
        width:"12%",
        height:"200%",
        backgroundColor:"#f8f8ff",
        alignItems:'center',
        justifyContent:'center',
        left:"103%",
        bottom:97,
        borderRadius:20,
        borderColor:"grey",
        borderWidth:2

    },
    container1: {
        flex: 1,  
        right:15,
        backgroundColor:'transparent',
        width:"120%",
        position:'absolute',
        left: -8,
        top:-28
        
    },
    container2:{
        flex:0,
        top:-30
    },
    button1:{   
        flex:0,
        backgroundColor:"black",
        width:"8%",
        // height:"8%",
        alignItems:'center',
        justifyContent:'center',
        alignSelf:"flex-end",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:-40,
        
        // paddingLeft:10
    },
    barcontainer:{
        flex:0,
        height:32,
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
        left:8,
        color: "red",
        top:5,
        height:30,
        fontSize:5,
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

export default styles;
