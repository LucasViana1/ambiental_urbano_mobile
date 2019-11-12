import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import api from '../services/api';

export default class Registros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      qtd: 0,
    };

    this.handleRegister = this.handleRegister.bind(this);
  }

  handleRegister() {
    this.props.navigation.navigate('Cadastro');
  }

  componentDidMount() {
    this.loadRecords();
  }

  loadRecords = async () => {
    const response = await api.get('/registros');

    const data2 = response.data;
    this.setState({data: data2});
    this.setState({qtd: this.state.data.length});
    // console.log(this.state.data);
    // console.log(this.props);
  };

  render() {
    let registros = [];
    for (i = 0; i < this.state.qtd; i++) {
      registros.push(
        <View key={i}>
          <Text>{this.state.data[i].id}</Text>
          <Text>{this.state.data[i].data_ocorrido}</Text>
        </View>,
      );
    }

    return (
      <View>
        <View>{registros}</View>
        <View>
          <TouchableOpacity
            onPress={this.handleRegister}
            style={styles.button_register}>
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button_register: {
    backgroundColor: 'red',
  },
});
