import React from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import BotaoCabecalho from '../componentes/BotaoCabecalho';

const ListaDeLugaresTela = (props) => {
  return (
    <View>
      <Text>ListaDeLugareTela</Text>
    </View>
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
