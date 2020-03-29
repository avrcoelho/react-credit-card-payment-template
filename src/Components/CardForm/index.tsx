import React, { useRef } from 'react';
import * as Yup from 'yup';

import { Container, Form, Row, Col, Button } from './styles';
import TextInput from '../TextInput';
import MaskInput from '../MaskInput';
import SelectInput from '../SelectInput';
import Stages from '../Stages';

const CardForm: React.FC = () => {
  const formRef = useRef<any>(null);

  async function handleSubmit(data: object) {
    console.log(data);
    try {
      // Remove all previous errors
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        cardName: Yup.string().required('Digite seu nome completo'),
        cardNumber: Yup.string()
          .matches(
            /^([0-9]{4}\s?[0-9]{4}\s?[0-9]{4}\s?[0-9]{4})$/,
            'Número de cartão inválido',
          )
          .required('Digite o número'),
        expirate: Yup.string()
          .matches(/^([0-9]{2}\/?[0-9]{2})$/, 'Data inválida')
          .required('Digite a data'),
        cvv: Yup.string()
          .matches(/^([0-9]{3})$/, 'Código inválido')
          .required('Digite o código'),
        portion: Yup.string().required('Insira o número de parcelas'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      console.log(data);
    } catch (err) {
      const validationErrors: any = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Container>
      <Stages />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <MaskInput
          name="cardNumber"
          label="Número do cartão"
          mask="9999 9999 9999 9999"
        />
        <TextInput name="cardName" label="Nome (igual ao cartão)" />
        <Row>
          <Col>
            <MaskInput name="expirate" label="Validade" mask="99/99" />
          </Col>
          <Col>
            <MaskInput name="cvv" label="CVV" mask="999" />
          </Col>
        </Row>
        <SelectInput name="portion" label="Número de parcelas" />
        <Button type="submit">Continuar</Button>
      </Form>
    </Container>
  );
};

export default CardForm;
