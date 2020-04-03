import React from 'react';

import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, addItem, removeItem, clearItem, ...props }) => {
  const { name, quantity, price, imageUrl } = item;

  const handleClearItem = item => () => clearItem(item);
  const handleAddItem = item => () => addItem(item);
  const handleRemoveItem = item => () => removeItem(item);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
