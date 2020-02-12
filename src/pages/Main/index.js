import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

// o container será utilizado por volta de toda a aplicação e vai servir para fazer alguns alinhamentos
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      {/** o form aqui terá sua estilização própria e encadeamentos próprios */}
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        {/** criado como componente porque quero que a estilização mude >baseado em algumas propriedades<
         * ex.: enquanto a requisição estiver sendo feita quero que o botão fique 'inclicável' e apareça apagado
         */}
        <SubmitButton disable>
          <FaPlus colo="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

/**
 * DICAS:
 *  Quando usar um componente estilizado ou um elemento html?
 *  -> Quando um componente tiver mais de dois níveis de encadiamento
    ex.:
      <Container>
        ...
        <form>
          <input>
            ...

 *  -> Quando queremos estilizar um elemento baseado em suas propriedades (ex.: o SubmitButton)
 *
 */
