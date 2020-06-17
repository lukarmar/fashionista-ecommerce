import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Cart from '../cart';
import Search from '../search';

import { Container } from './styles';

export default function SideBar({
  setVisibleCart,
  setVisibleSearch,
  visibleCart,
  visibleSearch,
}) {
  return (
    <>
      <Container visibleSearch={visibleSearch} visibleCart={visibleCart} />
      <CSSTransition
        in={visibleCart}
        timeout={400}
        classNames="visible"
        unmountOnExit
      >
        <Cart setVisibleCart={setVisibleCart} visibleCart={visibleCart} />
      </CSSTransition>
      <CSSTransition
        in={visibleSearch}
        timeout={400}
        classNames="visible"
        unmountOnExit
      >
        <Search
          visibleSearch={visibleSearch}
          setVisibleSearch={setVisibleSearch}
        />
      </CSSTransition>
    </>
  );
}

SideBar.propTypes = {
  setVisibleCart: PropTypes.func.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  visibleCart: PropTypes.bool.isRequired,
  visibleSearch: PropTypes.bool.isRequired,
};
