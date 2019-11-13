import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Picker,
  Alert,
} from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';
// import iconFooter from '../assets/footer_icon.png';

// export default class Cadastro extends Component {
const Cadastro = () => {
  const [data, setData] = useState('');
  const [ocorrencia, setOcorrencia] = useState('Poluição do ar');
  const [gravidade, setGravidade] = useState('Baixa');
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [numero, setNumero] = useState('');
  const [observacao, setObservacao] = useState('');

  const save = async () => {
    console.log(data);
    console.log(ocorrencia);
    console.log(gravidade);
    console.log(logradouro);
    console.log(cidade);
    console.log(estado);
    console.log(numero);
    console.log(observacao);

    const response = await api.post('/registros', {
      data_ocorrido: data,
      tipo_ocorrencia: ocorrencia,
      nivel_gravidade: gravidade,
      logradouro: logradouro,
      cidade: cidade,
      estado: estado,
      n_casa: numero,
      observacoes: observacao,
    });
    Alert.alert(
      'Cadastro realizado com sucesso!',
      'Você será redirecionado a listagem de registros',
      [
        // {
        //   text: 'Ask me later',
        //   onPress: () => console.log('Ask me later pressed'),
        // },
        // {
        //   text: 'Cancel',
        //   onPress: () => console.log('Cancel Pressed'),
        //   style: 'cancel',
        // },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>CADASTRO</Text>
        </View>
      </View>

      <ScrollView style={styles.body}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Data ocorrido</Text>
          <TextInput
            style={styles.input}
            placeholder="00/00/0000"
            onChangeText={data => setData(data)}
          />
        </View>

        <View style={styles.formGroupMult}>
          <View style={(styles.formGroup, styles.formGroupInternal)}>
            <Text style={styles.label}>Tipo ocorrência</Text>

            <Picker
              style={styles.picker}
              selectedValue={ocorrencia}
              onValueChange={(itemValue, itemPosition) =>
                setOcorrencia(itemValue)
              }>
              <Picker.Item label="Poluição do ar" value="Poluição do ar" />
              <Picker.Item label="Alagamento" value="Alagamento" />
              <Picker.Item label="Desmatamento" value="Desmatamento" />
            </Picker>
          </View>
          <View style={(styles.formGroup, styles.formGroupInternal)}>
            <Text style={styles.label}>Gravidade</Text>

            <Picker
              style={styles.picker}
              selectedValue={gravidade}
              onValueChange={(itemValue, itemPosition) =>
                setGravidade(itemValue)
              }>
              <Picker.Item label="Baixa" value="Baixa" />
              <Picker.Item label="Média" value="Média" />
              <Picker.Item label="Alta" value="Alta" />
            </Picker>
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Logradouro</Text>
          <TextInput
            style={styles.input}
            placeholder="Avenida, rua, ..."
            onChangeText={logradouro => setLogradouro(logradouro)}
          />
        </View>
        <View style={styles.formGroupMult}>
          <View style={(styles.formGroup, styles.formGroupInternal)}>
            <Text style={styles.label}>Cidade</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Jundiaí"
              onChangeText={cidade => setCidade(cidade)}
            />
          </View>

          <View style={(styles.formGroup, styles.formGroupInternal)}>
            <Text style={styles.label}>Estado</Text>
            <TextInput
              style={styles.input}
              placeholder="futuro select"
              onChangeText={estado => setEstado(estado)}
            />
          </View>

          <View style={(styles.formGroup, styles.formGroupInternal)}>
            <Text style={styles.label}>Nº</Text>
            <TextInput
              style={styles.input}
              placeholder="Numero da casa"
              onChangeText={numero => setNumero(numero)}
            />
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Observação</Text>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={3}
            placeholder="Informações adicionais sobre o ocorrido"
            onChangeText={observacao => setObservacao(observacao)}
          />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={save} style={styles.btnSave}>
            <Text style={styles.btnSaveLabel}>SALVAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* <View style={styles.footer}>
          <Image style={styles.logo} source={iconFooter} />
        </View> */}
    </View>
  );
  // }
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 6,
    backgroundColor: '#e6e6e6',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    // flex: 1,
    backgroundColor: '#9fff96',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,

    borderRadius: 40,
  },
  body: {
    flex: 6,
    backgroundColor: '#e6e6e6',
    marginTop: 20,
  },
  // footer: {
  //   // flex: 1,
  //   backgroundColor: 'orange',
  // },

  logo: {
    width: 80,
    height: 80,
    margin: 5,
    // position: 'relative',
    // justifyContent: 'flex-start',
  },

  titulo: {
    fontFamily: 'Jomolhari-Regular',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerTitulo: {
    flex: 1,
  },
  formGroup: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 6,
  },
  formGroupMult: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 6,
  },
  formGroupInternal: {
    marginLeft: 10,
    flex: 1,
    // borderLeftWidth: 1,
  },
  input: {
    borderWidth: 1,
    height: 38,
    borderRadius: 10,
    borderColor: '#707070',
    backgroundColor: 'white',
    marginTop: 8,
  },
  picker: {},
  textArea: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#707070',
    backgroundColor: 'white',
    marginTop: 8,
  },
  label: {
    fontSize: 22,
  },
  btnSave: {
    backgroundColor: '#0b7300',
    color: 'white',
    height: 40,
    borderRadius: 15,
    padding: 4,
    borderWidth: 0.5,
    borderColor: '#969696',
  },
  btnSaveLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 30,
  },
  borderLeftStyle: {
    borderLeftWidth: 2,
  },
});
