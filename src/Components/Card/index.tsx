import React from 'react';

import {
  Container,
  Brand,
  CardInfo,
  CardNumber,
  NameAndDate,
  CardName,
  CardExpirationDate,
} from './styles';
import brandIcon from '../../assets/images/brand.png';

const Card: React.FC = () => (
  <Container>
    <Brand src={brandIcon} alt="Brand" />
    <CardInfo>
      <CardNumber>**** **** **** ****</CardNumber>
      <NameAndDate>
        <CardName>Nome do titutlar</CardName>
        <CardExpirationDate>00/00</CardExpirationDate>
      </NameAndDate>
    </CardInfo>
  </Container>
);

export default Card;
