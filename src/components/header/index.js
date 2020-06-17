import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Ink from 'react-ink';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import logo from '../../assets/logo/logoLink.svg';
import { Container, Content, Logo, BoxButtons } from './styles';

export default function Header({
  setVisibleCart,
  setVisibleSearch,
  numberScrool,
}) {
  const amountProducts = useSelector((state) =>
    state.cart.reduce((sumTotal, item) => {
      return sumTotal + item.amount;
    }, 0)
  );

  return (
    <Container numberScrool={numberScrool}>
      <Content>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <BoxButtons>
          <button
            type="button"
            className="boxbuttons__button"
            onClick={() => setVisibleSearch(true)}
          >
            <FiSearch size={20} />
            <Ink />
          </button>
          <button
            type="button"
            className="boxbuttons__button"
            onClick={() => setVisibleCart(true)}
          >
            <span className="boxbuttons__button--cont">{amountProducts}</span>
            <FiShoppingBag size={20} />
            <Ink />
          </button>
        </BoxButtons>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  setVisibleCart: PropTypes.func.isRequired,
  setVisibleSearch: PropTypes.func.isRequired,
  numberScrool: PropTypes.number.isRequired,
};
