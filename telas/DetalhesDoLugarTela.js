import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetalhesDoLugarTela = (props) => {
  return (
    <View>
      <Text>DetalhesDoLugarTela</Text>
    </View>
  )
}

DetalhesDoLugarTela.navigationOptions = (dadosNav) => {
  return {
    headerTitle: dadosNav.navigation.getParam('tituloLugar')
  }
}


export default DetalhesDoLugarTela

const styles = StyleSheet.create({})
