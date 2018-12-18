import bus_numbers from  "./reducers/bus_numbers";
import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import buses from "./reducers/buses"

const createstoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createstoreWithMiddleware(combineReducers({
    BusRoutes:bus_numbers,
    BusReducer:buses

}));

export default store;