import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import axios from 'axios';
import Eventos from './eventos';

export default class ListaEventos extends Component {

  constructor(props) {
    super(props);

    this.state = { todosEventos: [] };
  }
 
  componentWillMount() {
      axios.get('http://mobile.ufpi.br/api/notifications/5a8b3e5e4d26300476941159')
      .then(response => { this.setState({ todosEventos: response.data }); })
      .catch(() => {console.log('Não foi possível recuperar os eventos.'); });
  }
 
  render() {
    return (
      <ScrollView>
        { this.state.todosEventos.map( evento => ( <Eventos key={evento.title} evento={evento}/> ) ) }
      </ScrollView>

    );
  }
}

