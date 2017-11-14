import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = () => createStore(rootReducer);
//this is how dispatch figures out where to send the ACTION.


export default configureStore;
