import React from 'react';

import {
  Container,
  CardInfo,
  CardNumber,
  NameAndDate,
  CardName,
  CardExpirationDate,
} from './styles';

const Card: React.FC = () => (
  <Container>
    <CardInfo>
      <CardNumber>9999 9999 9999 8888</CardNumber>
      <NameAndDate>
        <CardName>Nome do titutlar</CardName>
        <CardExpirationDate>00/00</CardExpirationDate>
      </NameAndDate>
    </CardInfo>
  </Container>
);

export default Card;
