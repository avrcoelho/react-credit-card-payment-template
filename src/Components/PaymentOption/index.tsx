import React from 'react';

import Card from '../Card';
import CardForm from '../CardForm';

import { Container, PaymentContainer, AddCard, TitleContainer } from './styles';
import cardIcon from '../../assets/images/cardIcon.svg';

export const PaymentOption: React.FC = () => {
  return (
    <Container>
      <PaymentContainer>
        <AddCard>
          <a href="asdas">
            <i className="fa fa-angle-left"></i>
            <span>Alterar forma de pagamento</span>
          </a>
          <TitleContainer>
            <img src={cardIcon} alt="Novo Cartão" />
            <h3>Adicione um novo cartão de crédito</h3>
          </TitleContainer>
          <Card />
        </AddCard>
        <CardForm />
      </PaymentContainer>
    </Container>
  );
};

export default PaymentOption;
