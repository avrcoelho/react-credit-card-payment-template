import styled from 'styled-components';

import frontCardEmpty from '../../assets/images/frontCardEmpty.svg';

export const Container = styled.div`
  width: 260px;
  height: 160px;
  background-image: url(${frontCardEmpty});
  background-size: cover;
  position: absolute;
  left: 28px;
  top: 155px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 670px) {
    left: 0;
    right: 0;
    margin: auto;
  }
`;

export const Brand = styled.div`
  img {
    width: 60px;
    margin-left: 15px;
    margin-top: 25px;
  }
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 15px;
`;

export const CardNumber = styled.span`
  text-shadow: 0px 1px 2px #000000b3;
  letter-spacing: 3.2px;
  color: #fff;
  font-size: 15px;
`;

export const NameAndDate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CardName = styled.div`
  text-shadow: 0px 1px 2px #000000b3;
  letter-spacing: 1px;
  color: #fff;
  font-size: 11px;
  text-transform: uppercase;
`;

export const CardExpirationDate = styled.div`
  text-shadow: 0px 1px 2px #000000b3;
  letter-spacing: 1px;
  color: #fff;
  font-size: 11px;
`;
