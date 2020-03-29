import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Input, Error } from './styles';

type Props = {
  name: string;
  label: string;
  value: string;
  max?: number;
  setValue: (value: string) => string;
};

const TextInput: React.FC<Props> = ({
  name,
  label,
  value,
  setValue,
  max,
  ...rest
}) => {
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
    <InputContainer data-testid="input">
      <Input
        ref={inputRef}
        error={!!error}
        value={value}
        maxLength={max || undefined}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

export default TextInput;
