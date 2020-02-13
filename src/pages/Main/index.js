import React, { Component } from 'react';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

// o container será utilizado por volta de toda a aplicação e vai servir para fazer alguns alinhamentos
import { Container, Form, SubmitButton, List } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, loading, repositories } = this.state;

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        {/** o form aqui terá sua estilização própria e encadeamentos próprios, por isso ele é um componente */}
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar repositório"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          {/** criado como componente porque quero que a estilização mude >baseado em algumas propriedades<
           * ex.: enquanto a requisição estiver sendo feita quero que o botão fique 'inclicável' e apareça apagado
           */}
          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repositories.name}>
              <span>{repository.name}</span>
              <a href="">Detalhes</a>
            </li>
          ))}
        </List>
      </Container>
    );
  }
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
 */
