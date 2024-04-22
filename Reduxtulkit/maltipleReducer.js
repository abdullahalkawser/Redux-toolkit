const { createStore, combineReducers, applyMiddleware } = require("@reduxjs/toolkit");
const { default: logger } = require("redux-logger");

const GET_PODUCT = 'GET_PODUCT';
const ADD_PODUCT = 'ADD_PODUCT';
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';



// Define initial state
const initialCounter = {
    user: [  'Abdullah'],
    count: 1,
};


// Define action creators
const getProduct = (user) => {
    return {
        type: GET_PODUCT,
        payload: user
    };
};

const addProduct = (user) => {
    return {
        type: ADD_PODUCT,
        payload: user
    };
};

//cart 


const initialCounterCart = {
    user: [ 'apple'],
    count: 1,
};


const getcart = (user) => {
    return {
        type:  GET_CART,
        payload: user
    };
};

const addcart= (user) => {
    return {
        type: ADD_CART,
        payload: user
    };
};







// Create reducer
const productReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case GET_PODUCT:
            return {
                ...state
            
            };

        case ADD_PODUCT:
            return {
                user: [...state.user,action.payload],
                
                count: state.count + 1,
            };
       
    




        default:
            return state;
    }
};




const cartReducer = (state = initialCounterCart, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            
            };
        case ADD_CART:
            return {
                user: [...state.user,action.payload],
                
                count: state.count + 1,
            };
       
    




        default:
            return state;
    }
};

// Combine reducer maltiple
const maltipleReducer = combineReducers({
    productR:productReducer,
    cartR : cartReducer
})

// Create store
const store = createStore(maltipleReducer,applyMiddleware(logger));

// Subscribe to store changes
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch actions
store.dispatch(getProduct());
store.dispatch(addProduct('DHAKAKAK'));
store.dispatch(addProduct('hjh'));
store.dispatch(addProduct('hjh'));
store.dispatch(addProduct('bangladesh'));


store.dispatch(getcart());
store.dispatch(addcart('bangladesh'));
