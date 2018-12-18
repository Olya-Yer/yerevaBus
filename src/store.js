import bus_numbers from  "./reducers/bus_numbers";
import {createStore,combineReducers,applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'


const createstoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createstoreWithMiddleware(combineReducers({
    BusRoutes:bus_numbers
}));

export default store;