import React from 'react';

import Card from '../Card';
import CardForm from '../CardForm';
import DataCardProvider from '../../context/useDataCard';

import {
  Container,
  PaymentContainer,
  AddCard,
  BackAndStage,
  ButtonBack,
  StagesMobile,
  TitleContainer,
} from './styles';
import cardIcon from '../../assets/images/cardIcon.svg';

export const PaymentOption: React.FC = () => {
  return (
    <Container>
      <PaymentContainer>
        <DataCardProvider>
          <AddCard>
            <BackAndStage>
              <ButtonBack href="asdas">
                <i className="fa fa-angle-left"></i>
                <span>Alterar forma de pagamento</span>
              </ButtonBack>
              <StagesMobile>
                <span>
                  <strong>Etapa 2 </strong> de 3
                </span>
              </StagesMobile>
            </BackAndStage>
            <TitleContainer>
              <img src={cardIcon} alt="Novo Cartão" />
              <h3>Adicione um novo cartão de crédito</h3>
            </TitleContainer>
            <Card />
          </AddCard>
          <CardForm />
        </DataCardProvider>
      </PaymentContainer>
    </Container>
  );
};

export default PaymentOption;
