import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearCartItem, addCartItem, removeCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, addCartItem, removeCartItem, clearCartItem, ...props }) => {
  const { name, quantity, price, imageUrl } = item;

  const handleClearCartItem = item => () => clearCartItem(item);
  const handleAddCartItem = item => () => addCartItem(item);
  const handleRemoveCartItem = item => () => removeCartItem(item);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveCartItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddCartItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearCartItem: item => dispatch(clearCartItem(item)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeCartItem: item => dispatch(removeCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
