import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 10px;
`;

export const PaymentContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: 450px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  margin-top: 35px;
  display: flex;
  flex-direction: row;
`;

export const AddCard = styled.div`
  height: 100%;
  width: 250px;
  background-color: #de4b4b;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  position: relative;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    letter-spacing: -0.01px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

    i {
      font-size: 18px;
      margin-right: 10px;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 35px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 15px;
    margin-left: 18px;
  }

  h3 {
    color: #fff;
    letter-spacing: -0.01px;
    font-size: 14px;
    font-weight: bold;
  }
`;
