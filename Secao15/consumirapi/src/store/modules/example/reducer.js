import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line default-param-last
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const newState = { ...state };
      newState.botaoClicado = !state.botaoClicado;
      return newState;

    case types.BOTAO_CLICADO_FAILURE:
      // eslint-disable-next-line no-case-declarations
      return state;

    case types.BOTAO_CLICADO_REQUEST:
      return state;

    default:
      return state;
  }
}
