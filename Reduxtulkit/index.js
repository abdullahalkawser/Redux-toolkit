const { createStore } = require('redux');

// Define action type constants
const INCREMENT = 'INCREMENT';
const INCREMENT_BY_COUNTVLUE = 'INCREMENT_BY_COUNTVLUE'
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';
const RESET = 'RESET';

// Define initial state
const initialCounter = {
    user: [{ name: 'Abdullah' }],
    count: 0,
};

// const initialUserState = {
//     user: [{ name: 'Abdullah' }],
// };

// Define action creators
const increment = () => {
    return {
        type: INCREMENT,
    };
};

const decrement = () => {
    return {
        type: DECREMENT,
    };
};
const resetcounter = () => {
    return {
        type: RESET,
    };
};

const incremtByVlue = (value) => {
    return {
        type: INCREMENT_BY_COUNTVLUE,
        payload: value
    };
};

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
};

// Create reducer
const counterReducer = (state = initialCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

            case RESET:
                return {
                    ...state,
                    count:0,
                };
                case INCREMENT_BY_COUNTVLUE:
                    return {
                        ...state,
                        count:state.count + action.payload,
                    };

                    case ADD_USER:
                        return {
                           user:[...state.user,action.payload],
                           count: state.count+1
                        };
    




        default:
            return state;
    }
};

// Create store
const store = createStore(counterReducer);

// Subscribe to store changes
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch actions
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(decrement());
// store.dispatch(resetcounter());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(resetcounter());


//  store.dispatch((incremtByVlue(10)));
//  store.dispatch((incremtByVlue(8)));
store.dispatch((addUser('kstp')));
store.dispatch((addUser('software enginneer')));

