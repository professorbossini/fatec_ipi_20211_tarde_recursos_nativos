import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import Cores from '../constantes/Cores';
import * as lugaresActions from '../store/lugares-actions';
import TiraFoto from '../componentes/TiraFoto'

import { useDispatch } from 'react-redux';

const NovoLugarTela = (props) => {
  const dispatch = useDispatch();
  
  const [novoLugar, setNovoLugar] = useState ('');
  const [imagemURI, setImagemURI] = useState();
  
  const novoLugarAlterado = (texto) => {
    setNovoLugar(texto);
  }
  const adicionarLugar = () => {
    dispatch(lugaresActions.addLugar(novoLugar, imagemURI));
    props.navigation.goBack();
  }
  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
    console.log(imagemURI);
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
        <TiraFoto onFotoTirada={fotoTirada}/>
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
