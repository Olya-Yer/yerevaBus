import axios from 'axios';
export  function searchByNames(args){
    console.log("called action with args",args)
    const body={
        from: args.from,
        to: args.to
    }
   return function(dispatch){
    axios.get('http://localhost:3000/getBusRoutes',{params:body}).then((res)=>{
        console.log("---action---res",res.data.routes),
        dispatch({
            type:"routes_search_success",
            payload:res.data.routes,
        })
    }).catch((err)=>{
        console.log("---2---err",err)
    })
   }
    
}

export function seachBuslist(){
    return function(dispatch){
        axios.get('http://localhost:3000/buses').then((res)=>{
            console.log("---action---res",res.data.buses),
            dispatch({
                type:"buses_search_success",
                payload:res.data.buses,
            })
        }).catch((err)=>{
            console.log("---2---err",err)
        })
       }
}
export function getBusTrack(bus_id){

    return function(dispatch){
        axios.get('http://localhost:3000/buses/busSchedule',{params:{busId:bus_id}}).then((res)=>{
            console.log("---action---res---",res.data.route),
            dispatch({
                type:"buseID_search_success",
                payload:res.data.route,
            })
        }).catch((err)=>{
            console.log("---2---err",err)
        })
       }
}