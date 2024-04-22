const { createStore, applyMiddleware,  } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");
const { thunk } = require("redux-thunk");


const GET_TODUS_REQUST = 'GET_TODUS_REQUST';
const  GET_TODUS_SUCCESE= 'GET_TODUS_SUCCESE';
const  GET_TODUS_FEILD= 'GET_TODUS_FEILD';
const API_URL = 'https://jsonplaceholder.typicode.com/todos'



// Define initial state
const initialCounter = {
todos: [],
islodaing: false,
error: null
};


// Define action creators
const getTodosRequst = () => {
    return {
        type: GET_TODUS_REQUST,
  
    };
};

const getTodosSuccsful = (user) => {
    return {
        type: GET_TODUS_SUCCESE,
        payload: user
    };
};

const getTodosFaild = (error) => {
    return {
        type: GET_TODUS_SUCCESE,
        payload: error
    };
};




// Create reducer
const apiReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case GET_TODUS_REQUST:
            return {
                ...state,
            islodaing: true
            
            };

        case GET_TODUS_SUCCESE:
            return {
                ...state,
                islodaing: false,
                todos: action.payload
            };
       
            case GET_TODUS_FEILD:
                return {
                    ...state,
                 
                    error: action.payload
                };
    




        default:
            return state;
    }
};


// asynic action creator 

const fetchData = ()=>{

    return (dispatch)=>{
        dispatch(getTodosRequst())
        axios.get(API_URL)
        .then((res)=>{
            const ress = res.data
            const titles = ress.map((dat)=> dat.title)
          dispatch(getTodosSuccsful(titles))
        })
        .catch((error)=>{
            const erors = error.message
            dispatch(getTodosFaild(erors))
        })
    

    }
    


}
   






// Create store
const store = createStore(apiReducer,applyMiddleware(thunk));

// Subscribe to store changes
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch actions
store.dispatch(fetchData());

