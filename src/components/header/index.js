import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

import logo from '../../assets/logo/logoLink.svg';
import { Container, Content, Logo, BoxButtons } from './styles';

export default function Header({ setVisibleCart }) {
  const cartSize = useSelector((state) => state.cart.length);

  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <BoxButtons>
          <button type="button" className="boxbuttons__button">
            <FiSearch size={20} />
          </button>
          <button
            type="button"
            className="boxbuttons__button"
            onClick={() => setVisibleCart(true)}
          >
            <span className="boxbuttons__button--cont">{cartSize}</span>
            <FiShoppingBag size={20} />
          </button>
        </BoxButtons>
      </Content>
    </Container>
  );
}
