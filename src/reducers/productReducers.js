import { FETCH_PRODUCTS } from '../types';

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { item: action.payload };
        default:
            return state;
    }
}