import CartTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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
    case CartTypes.ADD_CART_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case CartTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case CartTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    default:
      return state;
  }
};

export default cartReducer;
