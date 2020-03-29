import React from 'react';
import { render } from '@testing-library/react';

import Card from '.';
import { DataCardContext } from '../../context/useDataCard';

describe('Search', () => {
  let cardName: string = '';
  let cardNumber: string = '';
  let expirate: string = '';
  let cvv: string = '';
  let cvvFocus: boolean = false;
  const setCardName: Function = () => {};
  const setCardNumber: Function = () => {};
  const setExpirate: Function = () => {};
  const setCvv: Function = () => {};
  const setCvvFocus: Function = () => {};

  it('Should be able card empty', async () => {
    const { getByText, getByTestId } = render(
      <DataCardContext.Provider
        value={{
          cardName,
          cardNumber,
          expirate,
          cvv,
          cvvFocus,
          setCardName,
          setCardNumber,
          setExpirate,
          setCvv,
          setCvvFocus,
        }}>
        <Card />
      </DataCardContext.Provider>,
    );

    expect(getByTestId('card')).toContainElement(
      getByText('**** **** **** ****'),
    );
    expect(getByTestId('card')).toContainElement(getByText('Nome do titutlar'));
    expect(getByTestId('card')).toContainElement(getByText('00/00'));
    expect(getByTestId('card')).toContainElement(getByText('***'));
  });

  it('Should be able card not empty', async () => {
    cardName = '1111 1111 1111 1111';
    cardNumber = 'Tester Tester';
    expirate = '01/21';
    cvv = '123';

    const { getByText, getByTestId } = render(
      <DataCardContext.Provider
        value={{
          cardName,
          cardNumber,
          expirate,
          cvv,
          cvvFocus,
          setCardName,
          setCardNumber,
          setExpirate,
          setCvv,
          setCvvFocus,
        }}>
        <Card />
      </DataCardContext.Provider>,
    );

    expect(getByTestId('card')).toContainElement(getByText(cardNumber));
    expect(getByTestId('card')).toContainElement(getByText(cardName));
    expect(getByTestId('card')).toContainElement(getByText(expirate));
    expect(getByTestId('card')).toContainElement(getByText(cvv));
  });

  it('Should be able card have class active', async () => {
    cvvFocus = true;

    const { getByTestId } = render(
      <DataCardContext.Provider
        value={{
          cardName,
          cardNumber,
          expirate,
          cvv,
          cvvFocus,
          setCardName,
          setCardNumber,
          setExpirate,
          setCvv,
          setCvvFocus,
        }}>
        <Card />
      </DataCardContext.Provider>,
    );

    expect(getByTestId('card')).toHaveClass('active');
  });

  it('Should be able card don´t have class active', async () => {
    cvvFocus = false;

    const { getByTestId } = render(
      <DataCardContext.Provider
        value={{
          cardName,
          cardNumber,
          expirate,
          cvv,
          cvvFocus,
          setCardName,
          setCardNumber,
          setExpirate,
          setCvv,
          setCvvFocus,
        }}>
        <Card />
      </DataCardContext.Provider>,
    );

    expect(getByTestId('card')).not.toHaveClass('active');
  });
});
