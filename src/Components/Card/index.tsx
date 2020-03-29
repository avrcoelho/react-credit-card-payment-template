import React from 'react';

import { useDataCard } from '../../context/useDataCard';

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

const Card: React.FC = () => {
  const { cardName, cardNumber, expirate, cvv } = useDataCard();

  return (
    <Container>
      <Brand>
        {cardNumber.length > 10 && <img src={brandIcon} alt="Brand" />}
      </Brand>
      <CardInfo>
        <CardNumber>{cardNumber || '**** **** **** ****'}</CardNumber>
        <NameAndDate>
          <CardName>{cardName || 'Nome do titutlar'}</CardName>
          <CardExpirationDate>{expirate || '00/00'}</CardExpirationDate>
        </NameAndDate>
      </CardInfo>
    </Container>
  );
};

export default Card;
