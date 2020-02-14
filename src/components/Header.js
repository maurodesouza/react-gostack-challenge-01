import React from 'react';
import Logo from '../assets/facebook-logo.svg'

const Header = () => (
  <header>
    <img width="170" src={Logo} alt="Facebook logo"/>
    <div>
      <span>Meu perfil</span>
      <i class="fas fa-user-circle"></i>
    </div>
  </header>
)

export default Header;
