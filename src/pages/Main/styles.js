import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    /** passando o error nas props do form */
    border: 1px solid ${props => (props.error ? 'red' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.25s ease-out;
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

  /** o & se refere ao elemento atual, o [disabled] se refere a uma propriedade */
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

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /** & -> referenciando ao li atual; + li -> quero pegar qualquer li que seja seguido por um li anterior (o primeiro fica excluido)  */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;

      &:hover {
        color: #7139c1;
      }
    }
  }
`;

/*
Dicas:

export const Title = styled.h1`
  podemos fazer uma condição aqui: a função recebe por padrão todas as propriedades do elemento
  color: ${props => (props.error ? 'red' : '#7159c1')};
`;
*/
