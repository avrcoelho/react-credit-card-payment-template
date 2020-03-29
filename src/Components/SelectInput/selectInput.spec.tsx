import React from 'react';
import { Form } from '@unform/web';
import { render } from '@testing-library/react';

import SelectInput from '.';

describe('Search', () => {
  it('Should be able select name and label', () => {
    const { getByTestId, getByText } = render(
      <Form onSubmit={() => {}}>
        <SelectInput name="name" label="Titulo" />
      </Form>,
    );

    expect(getByTestId('selectinput')).toContainElement(getByText('Titulo'));
  });
});
