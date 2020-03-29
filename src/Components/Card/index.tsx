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
  const { cardName, cardNumber, expirate, cvv, cvvFocus } = useDataCard();

  return (
    <Container
      data-testid="card"
      className={cvvFocus ? 'active' : ''}
      cvv={cvv.length === 3}
      notEmptyCard={!!cardName && !!cardNumber && !!expirate}>
      <div className="card__front card__part">
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
      </div>
      <div className="card__back card__part">
        <span>{cvv || '***'}</span>
      </div>
    </Container>
  );
};

export default Card;
