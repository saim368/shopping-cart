import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from '../types';

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS_BY_SIZE:
            return {
              ...state,
              size: action.payload.size,
              filteredItems: action.payload.item,
            };
          case ORDER_PRODUCTS_BY_PRICE:
            return {
              ...state,
              sort: action.payload.sort,
              filteredItems: action.payload.item,
            };

        case FETCH_PRODUCTS:
            return { item: action.payload, filteredItems: action.payload };
        default:
            return state;
    }
}