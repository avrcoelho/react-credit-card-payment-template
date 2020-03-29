import styled from 'styled-components';

import frontCardEmpty from '../../assets/images/frontCardEmpty.svg';
import frontCard from '../../assets/images/frontCard.svg';
import backCardEmpty from '../../assets/images/backCardEmpty.svg';
import backCard from '../../assets/images/backCard.svg';

type Props = {
  cvv?: boolean;
  notEmptyCard?: boolean;
};

export const Container = styled.div`
  width: 260px;
  height: 160px;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;
  perspective: 600px;
  position: absolute;
  left: 28px;
  top: 155px;

  .card__part {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-size: cover;
    position: absolute;
    -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
  }

  .card__front {
    background-image: ${(props: Props) =>
      props.notEmptyCard ? `url(${frontCard})` : `url(${frontCardEmpty})`};
    transform: rotateY(0);
    -webkit-transform: rotateY(0);
    -moz-transform: rotateY(0);
  }

  .card__back {
    background-image: ${(props: Props) =>
      props.cvv ? `url(${backCard})` : `url(${backCardEmpty})`};
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    position: relative;

    span {
      position: absolute;
      left: 126px;
      top: 76px;
      letter-spacing: 2px;
      color: #3c3c3c;
      font-size: 13px;
    }
  }

  &.active .card__front {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
  }

  &.active .card__back {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
  }

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
