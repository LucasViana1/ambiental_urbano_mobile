import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';

export default class Registros extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    loadRecords = () => {
        // fetch("http://localhost:9999/registros")
        // fetch("https://backend.associacaopaideia.org.br/")
        fetch("https://randomuser.me/api/?results=150")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results
                })
            })
    }

    componentDidMount() {
        this.loadRecords();
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.lista}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={styles.line}>
                        
                            <View style={styles.info}>
                                <Text style={styles.email}>{item.data_ocorrido}</Text>
                                <Text style={styles.name}>{item.name.foto}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        // width: 40,
        // height: 40,
        // borderRadius: 50,
        // marginRight: 10,
        // alignSelf: "center"
    },
    container: {
        // marginTop: 10,
        // marginLeft: 8,
        // marginRight: 8,
        // backgroundColor: "#fff",
        // borderTopWidth: 0,
        // borderBottomWidth: 0
    },
    info: {
        // flexDirection: "column",
        // justifyContent: "flex-start"
    },
    email: {
        // fontSize: 14,
        // fontWeight: "bold"
    },
    name: {
        // fontSize: 12
    },
    line: {
        // height: 50,
        // flexDirection: "row",
        // borderBottomColor: "#ccc",  
        // borderBottomWidth: 1,
        // padding: 3
    },
    lista: {
        // marginRight: 10
    }

});