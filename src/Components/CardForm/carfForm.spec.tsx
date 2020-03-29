import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';

import CardForm from '.';
import DataCardProvider from '../../context/useDataCard';

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
});
