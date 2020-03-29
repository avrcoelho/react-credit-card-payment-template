import React, { useRef, useState } from 'react';
import * as Yup from 'yup';

import { Container, Form, Row, Col, Button } from './styles';
import TextInput from '../TextInput';
import MaskInput from '../MaskInput';
import SelectInput from '../SelectInput';
import Stages from '../Stages';
import { useDataCard } from '../../context/useDataCard';
import api from '../../services/api';

const CardForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<any>(null);
  const {
    cardName,
    cardNumber,
    expirate,
    cvv,
    setCardName,
    setCardNumber,
    setExpirate,
    setCvv,
    setCvvFocus,
  } = useDataCard();

  function sendToApi(data: object) {
    return new Promise((resolve) => {
      setTimeout(async () => {
        await api.post('/pagar', data);

        resolve();
      }, 2000);
    });
  }

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
        portion: Yup.number().required('Insira o número de parcelas'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      setLoading(true);
      await sendToApi(data);
      setLoading(false);
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
      <Form ref={formRef} onSubmit={handleSubmit} data-testid="form">
        <MaskInput
          name="cardNumber"
          label="Número do cartão"
          mask="9999 9999 9999 9999"
          value={cardNumber}
          setValue={(value: string) => setCardNumber(value)}
        />
        <TextInput
          name="cardName"
          label="Nome (igual ao cartão)"
          value={cardName}
          setValue={(value: string) => setCardName(value)}
          max={20}
        />
        <Row>
          <Col>
            <MaskInput
              name="expirate"
              label="Validade"
              mask="99/99"
              value={expirate}
              setValue={(value: string) => setExpirate(value)}
            />
          </Col>
          <Col>
            <MaskInput
              name="cvv"
              label="CVV"
              mask="999"
              value={cvv}
              setValue={(value: string) => setCvv(value)}
              setFocus={(value: boolean) => setCvvFocus(value)}
            />
          </Col>
        </Row>
        <SelectInput name="portion" label="Número de parcelas" />
        <Button type="submit">
          {loading ? (
            <i className="fa fa-spinner fa-pulse" data-testid="loading" />
          ) : (
            'Continuar'
          )}
        </Button>
      </Form>
    </Container>
  );
};

export default CardForm;
