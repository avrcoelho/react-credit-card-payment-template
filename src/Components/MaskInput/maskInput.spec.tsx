import React from 'react';
import { Form } from '@unform/web';
import { render } from '@testing-library/react';

import MaskInput from '.';

describe('MaskInput', () => {
  it('Should be able input value and label', () => {
    const { getByTestId, getByText } = render(
      <Form onSubmit={() => {}}>
        <MaskInput
          name="name"
          label="Titulo"
          value="1"
          mask="9"
          setValue={(value: string) => value}
        />
      </Form>,
    );

    expect(getByTestId('markinput')).toContainElement(getByText('Titulo'));
    expect(document.querySelector('input')?.value).toBe('1');
  });
});
