import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Ink from 'react-ink';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import logo from '../../assets/logo/logoLink.svg';
import { Container, Content, Logo, BoxButtons } from './styles';

export default function Header({ setVisibleCart, setVisibleSearch }) {
  const amountProducts = useSelector((state) =>
    state.cart.reduce((sumTotal, item) => {
      return sumTotal + item.amount;
    }, 0)
  );
  return (
    <Container>
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
