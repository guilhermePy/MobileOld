import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class Eventos extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.evento.title}</Text>
        <Text>{this.props.evento.location}</Text>
        <Text>{this.props.evento.startDate}</Text>
        <Text>{this.props.evento.createdAt}</Text>
        <Text>{this.props.evento.data}</Text>
        <Text>{this.props.evento.hora}</Text>
      </View>
    );
  }
}


