import React from 'react';

import { Container, Stage } from './styles';

const Stages: React.FC = () => {
  return (
    <Container>
      <Stage>
        <i className="fa fa-check-circle"></i>
        <span>Carrinho</span>
      </Stage>
      <i className="fa fa-angle-right"></i>
      <Stage>
        <div className="circle">2</div>
        <span>Pagamento</span>
      </Stage>
      <i className="fa fa-angle-right"></i>
      <Stage>
        <div className="circle">3</div>
        <span>Confirmação</span>
      </Stage>
    </Container>
  );
};

export default Stages;
