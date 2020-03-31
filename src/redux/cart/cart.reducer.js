import CartTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  isHidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      };
    case CartTypes.ADD_ITEM:
      return { 
        ...state,
        items: addItemToCart(state.items, action.payload) };
    default:
      return state;
  }
};

export default cartReducer;
