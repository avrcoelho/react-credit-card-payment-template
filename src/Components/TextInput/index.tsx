import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Input, Error } from './styles';

type Props = {
  name: string;
  label: string;
};

const TextInput: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState<string>('');

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
      <Input
        ref={inputRef}
        error={!!error}
        value={value}
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
