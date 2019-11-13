import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import api from '../services/api';

const Registros = ({navigation}) => {
  const [data, setData] = useState([]);
  const [qtd, setqtd] = useState(0);

  useEffect(() => {
    loadRegister();
  }, []);

  const loadRegister = async () => {
    const response = await api.get('/registros');
    const data2 = response.data;
    // console.log(data2.length  );
    // setData(data2);
    for (i = 0; i < data2.length; i++) {
      setData(data.push(data2[i]));
      // console.log('ah');
    }
    // console.log(response.data[0]);
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={styles.btnRegister}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setqtd(qtd + 1)}
          style={styles.btnRegister}>
          <Text>testee</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>{data}</Text>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text>{item.id}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
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
    backgroundColor: 'red',
  },
});
