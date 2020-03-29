import React from 'react';
import { Form } from '@unform/web';
import { render } from '@testing-library/react';

import TextInput from '.';

describe('TextInput', () => {
  it('Should be able input value and label', () => {
    const { getByTestId, getByText } = render(
      <Form onSubmit={() => {}}>
        <TextInput
          name="name"
          label="Titulo"
          value="Tester"
          setValue={(value: string) => value}
        />
      </Form>,
    );

    expect(getByTestId('input')).toContainElement(getByText('Titulo'));
  });
});
