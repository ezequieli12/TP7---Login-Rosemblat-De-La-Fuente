import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, Text, View, SafeAreaView, Image, Alert } from 'react-native';

export default function App() {
  const verificarInicioSesion = () => {
    const usuario = extraerUsuario(correo);
    (usuario === clave) 
      ? Alert.alert('Inicio de sesión exitoso') 
      : Alert.alert('Contraseña incorrecta');
  };

  const extraerUsuario = (correo) => {
    const partes = correo.split('@');
    return partes[0];
  };

  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, width: 400, flexDirection: 'column', backgroundColor: '#fff' }}>
      <StatusBar style="auto" />
      <View style={estilos.contenedor}>
        <Image
          style={estilos.logoPequeno}
          source={require('./assets/logo.png')}
        />
        <TextInput
          placeholder="Correo electrónico"
          onChangeText={setCorreo}
          style={estilos.campoEntrada}
        />
        <TextInput
          placeholder="Clave"
          onChangeText={setClave}
          style={estilos.campoEntrada}
        />
        <Button
          style={estilos.boton}
          title="Iniciar sesión"
          onPress={verificarInicioSesion}
        />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  campoEntrada: {
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
    width: 230,
    fontSize: 18,
  },
  boton: {},
  logoPequeno: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
