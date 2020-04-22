import React from 'react';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartIsHidden } from '../../redux/cart/cart.selectors';
import BackPortfolioBtn from '../back-portfolio-btn/back-portfolio-btn.component';

const Header = ({ currentUser, isHidden, ...props }) => {
  return (
    <div className="header">
      {!isHidden && <CartDropdown />}
      <div className="fixed-container">
        <div className="btn-and-logo-container">
          <BackPortfolioBtn />
          <Link className="logo-container" to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartIsHidden,
});

export default connect(mapStateToProps)(Header);
