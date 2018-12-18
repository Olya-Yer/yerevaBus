const Initial_state={

}

export default function(state=Initial_state, action){
    console.log("----reducer called",action)
    switch(action.type){
        case "routes_search_success":
            return state={
            ...state,
            ...action.payload
            };
        default:
            return state;
            }
} 