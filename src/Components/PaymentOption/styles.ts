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
  min-height: 460px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  margin-top: 35px;
  display: flex;
  flex-direction: row;

  @media (max-width: 670px) {
    flex-direction: column;
  }
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

  @media (max-width: 670px) {
    width: 100%;
    height: 250px;
  }
`;

export const BackAndStage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const ButtonBack = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: -0.01px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 670px) {
    margin-top: 0;
  }

  i {
    font-size: 18px;
    margin-right: 10px;

    @media (max-width: 670px) {
      font-size: 30px;
    }
  }

  span {
    @media (max-width: 670px) {
      display: none;
    }
  }
`;

export const StagesMobile = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 13px;
  display: none;

  @media (max-width: 670px) {
    display: flex;
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

    @media (max-width: 670px) {
      width: 40px;
      height: 40px;
    }
  }

  h3 {
    color: #fff;
    letter-spacing: -0.01px;
    font-size: 14px;
    font-weight: bold;
  }
`;
