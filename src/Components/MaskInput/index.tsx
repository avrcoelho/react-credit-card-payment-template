import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer, Input, Error } from './styles';

type Props = {
  name: string;
  label: string;
  mask: string;
  value: string;
  setValue: (value: string) => string;
  setFocus?: (value: boolean) => boolean;
};

const TextInput: React.FC<Props> = ({
  name,
  label,
  mask,
  value,
  setValue,
  setFocus,
  ...rest
}) => {
  const inputRef = useRef(null);

  const { fieldName, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue('');
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer data-testid="markinput">
      <Input
        mask={mask}
        ref={inputRef}
        error={error}
        value={value}
        maskChar={null}
        id={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onFocus={() => name === 'cvv' && setFocus && setFocus(true)}
        onBlur={() => name === 'cvv' && setFocus && setFocus(false)}
        {...rest}
      />
      <label htmlFor={name}>{label}</label>
      {error && <Error>{error}</Error>}
    </InputContainer>
  );
};

export default TextInput;
