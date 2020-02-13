import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  /** criando um box */
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

// posso utilizar igual o keyframes do css
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// podemos passar os atributos dos elementos dentro do css usando attrs e podemos acessar as propriedades passadas no component também utilizando props
export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  /** o & se refere ao próprio elemento, o [disabled] se refere a uma propriedade */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }

  /**
      usando o svg acima foi como eu fiz, pode ser feito assim:
      somente quando loading estiver como true
      como é um conjunto de propriedades do css temos que usar o 'css'
  */

  /* usando as propriedades dos componentes
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
  */
`;

/*
export const Title = styled.h1`
  podemos fazer uma condição aqui: a função recebe por padrão todas as propriedades do elemento
  color: ${props => (props.error ? 'red' : '#7159c1')};
`;
*/
