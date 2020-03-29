import styled from 'styled-components';
import { Form as UnForm } from '@unform/web';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 20px 40px 40px;
`;

export const Form = styled(UnForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  max-width: 400px;

  @media (max-width: 760px) {
    max-width: 300px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 36px;
  background-color: #de4b4b;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;

  &:first-child {
    padding-right: 10px;
  }

  &:last-child {
    padding-left: 10px;
  }
`;
