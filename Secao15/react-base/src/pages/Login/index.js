import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>Login</Title>
      <p>atapo</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
