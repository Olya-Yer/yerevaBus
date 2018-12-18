const Initial_state={

}

export default function(state=Initial_state, action){
    console.log("----bus--reducer called",action)
    switch(action.type){
        case "buses_search_success":
            return state={
            ...state,
            ...action.payload
            }
        case "buseID_search_success":
        console.log("----bus--buses_search_success called",action)
            return state={
            ...state,
            busRoute: action.payload
            }; 
        default:
            return state;
            }
} 
