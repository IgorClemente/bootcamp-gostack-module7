import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/img/logo.svg';

export default function Reader() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>1 item</span>
        </div>
        <MdShoppingBasket size="36px" color="#fff" />
      </Cart>
    </Container>
  );
}
