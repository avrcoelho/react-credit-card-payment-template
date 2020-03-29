import React, { createContext, useState, useContext } from 'react';

interface IContext {
  cardName: string;
  cardNumber: string;
  expirate: string;
  cvv: string;
  setCardName: Function;
  setCardNumber: Function;
  setExpirate: Function;
  setCvv: Function;
}

export const DataCardContext = createContext<IContext>({
  cardName: '',
  cardNumber: '',
  expirate: '',
  cvv: '',
  setCardName: Function,
  setCardNumber: Function,
  setExpirate: Function,
  setCvv: Function,
});

const DataCardProvider: React.FC = ({ children }) => {
  const [cardName, setCardName] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [expirate, setExpirate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  return (
    <DataCardContext.Provider
      value={{
        cardName,
        cardNumber,
        expirate,
        cvv,
        setCardName,
        setCardNumber,
        setExpirate,
        setCvv,
      }}>
      {children}
    </DataCardContext.Provider>
  );
};

export default DataCardProvider;

export function useDataCard() {
  const context = useContext(DataCardContext);

  if (!context) throw new Error('useCount must be used within a CountProvider');

  const {
    cardName,
    cardNumber,
    expirate,
    cvv,
    setCardName,
    setCardNumber,
    setExpirate,
    setCvv,
  }: IContext = context;

  return {
    cardName,
    cardNumber,
    expirate,
    cvv,
    setCardName,
    setCardNumber,
    setExpirate,
    setCvv,
  };
}
