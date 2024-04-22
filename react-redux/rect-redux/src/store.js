import { createStore,  } from 'redux';
import counterReducer from './service/reducer/reducercount';


const store = createStore(
counterReducer
    
);

export default store;
