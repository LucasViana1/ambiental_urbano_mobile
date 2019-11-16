import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Alert
} from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';
import imgPoluicao from '../assets/poluicao.png';
import imgDesmatamento from '../assets/desmatamento.png';
import imgAlagamento from '../assets/alagamento.png';

const Registros = ({navigation}) => {
  const [data, setData] = useState([]);
  const [qtd, setqtd] = useState(0);

  useEffect(() => {
    loadRegister();
  }, []);

  const loadRegister = async () => {
    const response = await api.get('/registros');
    const data2 = response.data;
    setData(data2);

    console.log(data);
  };
  const deleteRegister = async (idRecord, x) => {
    console.log(x);
    // Alert.alert(
    //   'Tem certeza que deseja excluir esse registro?',
    //   'Essa exclusão é permanente!',
    //   [
    //     // {
    //     //   text: 'Ask me later',
    //     //   onPress: () => console.log('Ask me later pressed'),
    //     // },
    //     {
    //       text: 'CANCELAR',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {
    //       text: 'OK',
    //       onPress: () => {
    //         //exclui registro via Rest
    //         console.log(`excluido registro do id ${idRegister}`);
    //       }
    //     },
    //   ],
    //   {cancelable: false},
    // );
    // // const response = await api.get('/registros');

  };

  const getAvatar = tipo => {
    let img = '';

    switch (tipo) {
      case 'Alagamento':
        img = imgAlagamento;
        break;
      case 'Desmatamento':
        img = imgDesmatamento;
        break;
      case 'Poluição do ar':
        img = imgPoluicao;
        break;
    }
    return img;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <View style={styles.containerTitulo}>
          <Text style={styles.titulo}>
            GERÊNCIAMENTO DE INFORMAÇÕES AMBIENTAIS
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginVertical: 6}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.btnRegister}>
          <Text style={styles.btnRegisterLabel}>NOVO REGISTRO</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <View style={{flex: 1}}>
                <Image
                  source={getAvatar(item.tipo_ocorrencia)}
                  style={styles.avatar}
                />
              </View>

              <View style={{flex: 4}}>
                <Text style={styles.description}>
                  {item.tipo_ocorrencia} em {item.cidade} na data de{' '}
                  {item.data_ocorrido}.
                </Text>
                <Text style={styles.description}>
                  Nível de gravidade: {item.nivel_gravidade}
                </Text>
              </View>

              <View style={{flex: 1, marginRight: 17, alignItems: 'flex-end'}}>
                <TouchableOpacity
                  onPress={deleteRegister}
                  style={styles.btnDelete}>
                  <Text style={styles.btnLabel}>X</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  onPress={() => navigation.navigate('Cadastro')}
                  style={styles.btnEdit}>
                  <Text style={styles.btnLabel}>/</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Registros;

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
  btnRegister: {
    backgroundColor: 'blue',
    height: 40,
    borderRadius: 15,
    padding: 4,
    borderWidth: 0.5,
    borderColor: '#969696',
  },
  btnRegisterLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 30,
  },
  btnDelete: {
    backgroundColor: 'red',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginBottom: 3,
    borderRadius: 100,
    justifyContent: 'center',
    borderWidth: 2,
  },
  btnEdit: {
    backgroundColor: '#d1ce00',
    alignItems: 'center',
    width: 18,
    borderRadius: 4,
  },
  btnLabel: {
    fontSize: 25,
    fontWeight: 'bold',

  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: '#a6a6a6',
    flexDirection: 'row',
    marginTop: 10,
    paddingRight: 6,
    height: 80,
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 55,
  },
  description: {
    fontSize: 16,
    paddingBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    margin: 5,
  },

  titulo: {
    fontFamily: 'Jomolhari-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerTitulo: {
    flex: 1,
  },
  header: {
    backgroundColor: '#9fff96',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 1,
    borderRadius: 40,
    marginBottom: 10,
  },
});
