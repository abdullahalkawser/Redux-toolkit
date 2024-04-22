import { DECREMENT, INCREMENT,RESET } from "../constant/constnat";


export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};
export const resetcounter = () => {
    return {
        type: RESET,
    };
};








