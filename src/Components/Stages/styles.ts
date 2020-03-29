import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 80px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 20px;

  @media (max-width: 760px) {
    width: calc(100% - 20px);
  }

  @media (max-width: 670px) {
    display: none;
  }

  i {
    font-size: 22px;
    color: #de4b4b;
  }
`;

export const Stage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    font-size: 22px;
    color: #de4b4b;
    margin-right: 6px;
  }

  span {
    font-size: 12px;
    color: #de4b4b;
    letter-spacing: -0.01px;
  }

  .circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: solid 1px #de4b4b;
    color: #de4b4b;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    line-height: 0;
    margin-right: 6px;
  }
`;
