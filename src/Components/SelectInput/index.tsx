import React, { useEffect, useRef, memo } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Select, Error } from './styles';

type Props = {
  name: string;
  label: string;
};

const portions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const SelectInput: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      <Select ref={inputRef} error={!!error} {...rest}>
        {portions.map((portion: number) => (
          <option key={portion} value={portion}>
            {portion}
          </option>
        ))}
      </Select>
      <label htmlFor={name}>{label}</label>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

export default memo(SelectInput);
