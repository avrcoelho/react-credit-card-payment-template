import React from 'react';

import { Container, LogoContainer, Logo } from './styles';
import logo from '../../assets/images/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} alt="Demo Shop" />
      </LogoContainer>
    </Container>
  );
};

export default Header;
