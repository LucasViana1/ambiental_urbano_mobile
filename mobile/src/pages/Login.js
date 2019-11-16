import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert
} from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';

const Login = ({navigation}) => {


  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const login = async () => {

    const response = await api.post('/usuarios', {
      login: usuario,
      senha: senha,
    }).then(resp => {
      console.log(resp.data);
      const retorno = resp.data;
      if(retorno == 'Usuário encontrado'){
        //redireciona para tela de registros
        navigation.navigate('Registros')
      }
      else{
        Alert.alert(
          'Erro',
          'Usuário ou senha inválidos!',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: false},
        );
      }

    });

  };

  return (
    <View style={styles.container}>
      <View style={styles.panel}>

      <Image style={styles.logo} source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={usuario => setUsuario(usuario)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={senha => setSenha(senha)}
      />
      <TouchableOpacity onPress={login} style={styles.btnEnter}>
        <Text style={styles.btnEnterLabel}>ENTRAR</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 6,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  panel:{
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
    borderRadius: 25,
    backgroundColor: '#deffd9',
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 250,
    borderRadius: 10,
    borderColor: '#707070',
    backgroundColor: 'white',
    marginTop: 8,
    textAlign: 'center',
    fontSize: 20
  },
  logo: {
    width: 130,
    height: 110,
    margin: 5,
  },
  btnEnter: {
    marginTop: 10,
    backgroundColor: '#1544d1',
    color: 'white',
    height: 45,
    borderRadius: 15,
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#969696',
  },
  btnEnterLabel: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 34,
  },

});