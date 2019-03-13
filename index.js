import React, { Component } from 'react';
import { AppRegistry } from 'react-native';



import ListaNoticias from './src/components/ListaNoticias';
import ListaEventos from './src/components/ListaEventos';


  
class UFPI_MOBILE extends Component {
  render() {
    return (
      <ListaNoticias/>
    );
  }
}

{/*
  Lista todos os eventos do JSON na tela.
class UFPI_MOBILE extends Component {
  render() {
    return (
      <ListaEventos/>
    );
  }
}
*/}
AppRegistry.registerComponent('UFPI_MOBILE', () => UFPI_MOBILE);
