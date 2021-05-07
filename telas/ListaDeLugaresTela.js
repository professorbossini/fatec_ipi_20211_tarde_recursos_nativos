import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Platform, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';
import LugarItem from '../componentes/LugarItem';
import Lugar from '../modelo/Lugar';
import * as lugaresActions from '../store/lugares-actions';

const ListaDeLugaresTela = (props) => {
  const lugares = useSelector(estado => estado.lugares.lugares);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lugaresActions.listarLugares())
  }, [dispatch])
  return (
    <FlatList 
      data = {lugares}
      keyExtractor={lugar => lugar.id}
      renderItem = {
        lugar => (
          <LugarItem
            nomeLugar={lugar.item.titulo}
            onSelect={() => {
              props.navigation.navigate('DetalhesDoLugar', {
                tituloLugar: lugar.item.titulo, idLugar: lugar.id
              })
            }}
            imagem={lugar.item.imagemURI}
            endereco={null}
          >

          </LugarItem>
        )
      }
    />
  )
}

ListaDeLugaresTela.navigationOptions = dadosNavegacao => {
  return {
    headerTitle: "Lista de lugares",
    headerRight: () => {
      return (
        <HeaderButtons
          HeaderButtonComponent={BotaoCabecalho}>
          <Item
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              dadosNavegacao.navigation.navigate("NovoLugar");
            }}
          />
        </HeaderButtons>
      )
    }
  }
}


export default ListaDeLugaresTela

const styles = StyleSheet.create({})
