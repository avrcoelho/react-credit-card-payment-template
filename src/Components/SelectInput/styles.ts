import styled from 'styled-components';

type Props = {
  error?: boolean;
};

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  label {
    top: 10px;
    position: absolute;
    font-size: 14px;
    color: #c9c9c9;
    cursor: text;
    transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 36px;
  border: none;
  border-bottom: solid 1px
    ${(props: Props) => (props.error ? '#eb5757' : '#c9c9c9')};
  font-size: 14px;
  z-index: 1;
  background: transparent;
  border-radius: 0;

  &:focus ~ label,
  &:not([value='']):not(:focus) ~ label {
    top: -10px;
    font-size: 11px;
  }
`;

export const Error = styled.small`
  color: #666;
  font-size: 11px;
  color: #eb5757;
`;
