import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class Noticias extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.noticia.code}</Text>
        <Text>{this.props.noticia.createdAt}</Text>
        <Text>{this.props.noticia.titulo}</Text>
        <Text>{this.props.noticia._data}</Text>
        <Text>{this.props.noticia.hora}</Text>
      </View>
    );
  }
}


