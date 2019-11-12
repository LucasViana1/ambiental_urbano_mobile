import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';

export default class Registros extends Component {
  state = {
    observacao: '',
  };

  save = () => {
    console.log(this.state.observacao);
  };

  render() {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image style={{width: 80, height: 80}} source={logo} />
          <Text>CADASTRO</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text>observação</Text>
            <TextInput
              placeholder="Observação"
              onChangeText={observacao => this.setState({observacao})}
            />
          </View>
          <View>
            <TouchableOpacity onPress={this.save} style={styles.btnSave}>
              <Text>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSave: {
    backgroundColor: 'red',
  },
  cabecalho: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
