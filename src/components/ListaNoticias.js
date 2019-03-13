import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import axios from 'axios';
import Noticias from './noticias';

export default class ListaNoticias extends Component {

  constructor(props) {
    super(props);

    this.state = { todasNoticias: [] };
  }
 
  componentWillMount() {
      axios.get('http://mobile.ufpi.br/api/articles')
      .then(response => { this.setState({ todasNoticias: response.data }); })
      .catch(() => {console.log('Não foi possível recuperar as noticias.'); });
  }
 
  render() {
    return (
      <ScrollView>
        { this.state.todasNoticias.map( noticia => ( <Noticias key={noticia.code} noticia={noticia}/> ) ) }
      </ScrollView>

    );
  }
}

