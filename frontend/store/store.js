import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from '../middleware/thunk';


const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));
//this is how dispatch figures out where to send the ACTION.


export default configureStore;
