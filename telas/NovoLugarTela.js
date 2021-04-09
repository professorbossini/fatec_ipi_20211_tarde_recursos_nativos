import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Cores from '../constantes/Cores'
const NovoLugarTela = (props) => {
  const [novoLugar, setNovoLugar] = useState ('');
  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }
  const adicionarLugar = () => {
    console.log ('adicionando novo lugar....');
  }
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo lugar</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={novoLugarAlterado}
          value={novoLugar}
        />
        <Button 
          title="Salvar"
          color={Cores.primary}
          onPress={() => adicionarLugar()}
        />
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  titulo: {
    fontSize: 18,
    marginBottom: 16
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 8,
    paddingVertical: 4
  }
})
