import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartIsHidden = createSelector(
  [selectCart],
  cart => cart.isHidden
);

export const selectCartItemsCount = createSelector([selectCartItems], items =>
  items.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectCartItems], items =>
  items.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  )
);
