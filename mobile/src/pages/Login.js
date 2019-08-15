import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';

import logo from '../assets/logo.png';

export default function Login({ navigation }) {

  const [user, setUser] = useState('');
  
  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        navigation.navigate('Main', { user });
      }
    })
  }, []);

  async function handleLogin() {
    const response = await api.post('/devs', { username: user });

    const { _id } = response.data;
    
    // Assim que o usuário loga é armazenado o ID dele
    await AsyncStorage.setItem('user', _id);

    navigation.navigate('Main', { _id });
  }

  return (
    // Acessibilidade, o keyboardavoidview não deixa o teclado passar por cima
    // do conteúdo, aplicando um padding
    <KeyboardAvoidingView 
      behavior="padding"
      enabled={ Platform.OS === 'ios' } // só vai habilitar essa função para o iOS
      style={ styles.container }
    >
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário do GitHub"
        placeholderTextColor="#999"
        style={ styles.input }
        value={user}
        onChangeText={setUser}
      />
      <TouchableOpacity onPress={handleLogin} style={ styles.button }>
        <Text style={ styles.buttonText }>Enviar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    borderRadius: 4,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
