import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';

import CardForm from '.';
import DataCardProvider, { DataCardContext } from '../../context/useDataCard';

describe('Search', () => {
  it('Should be able form invalid', async () => {
    const { getByTestId, getByText } = render(
      <DataCardProvider>
        <CardForm />
      </DataCardProvider>,
    );

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });

    expect(getByTestId('form')).toContainElement(
      getByText('Digite seu nome completo'),
    );
    expect(getByTestId('form')).toContainElement(getByText('Digite o número'));
    expect(getByTestId('form')).toContainElement(getByText('Digite a data'));
    expect(getByTestId('form')).toContainElement(getByText('Digite o código'));
  });

  it('Should be able date, cardNumber and cvv invalid', async () => {
    const { getByTestId, getByText, getByLabelText } = render(
      <DataCardProvider>
        <CardForm />
      </DataCardProvider>,
    );

    await act(async () => {
      fireEvent.change(getByLabelText('Número do cartão'), {
        target: { value: '1111 1111' },
      });
      fireEvent.change(getByLabelText('Validade'), {
        target: { value: '11' },
      });
      fireEvent.change(getByLabelText('CVV'), {
        target: { value: '1' },
      });

      fireEvent.submit(getByTestId('form'));
    });

    await waitFor(() => {
      expect(getByTestId('form')).toContainElement(
        getByText('Número de cartão inválido'),
      );
      expect(getByTestId('form')).toContainElement(getByText('Data inválida'));
      expect(getByTestId('form')).toContainElement(
        getByText('Código inválido'),
      );
    });
  });

  it('Should be able call API', async () => {
    const cardName: string = 'Tester Silva';
    const cardNumber: string = '';
    const expirate: string = '';
    const cvv: string = '';
    const cvvFocus: boolean = false;
    const setCardName: Function = () => {};
    const setCardNumber: Function = () => {};
    const setExpirate: Function = () => {};
    const setCvv: Function = () => {};
    const setCvvFocus: Function = () => {};

    const { getByTestId, queryByTestId, getByLabelText } = render(
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
        <CardForm />
      </DataCardContext.Provider>,
    );

    await act(async () => {
      fireEvent.change(getByLabelText('Número do cartão'), {
        target: { value: '1111 1111 1111 1111' },
      });
      fireEvent.change(getByLabelText('Nome (igual ao cartão)'), {
        target: { value: 'Tester Silva' },
      });
      fireEvent.change(getByLabelText('Validade'), {
        target: { value: '01/22' },
      });
      fireEvent.change(getByLabelText('CVV'), {
        target: { value: '123' },
      });

      fireEvent.submit(getByTestId('form'));
    });

    await waitFor(() => expect(queryByTestId(/loading/i)).toBeTruthy());
  });
});
