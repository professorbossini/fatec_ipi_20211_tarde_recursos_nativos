import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ENV from '../env';
const PreviewDoMapa = (props) => {
  let mapaURL;
  if (props.localizacao){
    mapaURL = `https://maps.googleapis.com/maps/api/staticmap?center=${props.localizacao.lat},${props.localizacao.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${props.localizacao.lat},${props.localizacao.lng}&key=${ENV.apiKey}`;
  }
  return (
    <View style={{...styles.previewDoMapa, ...props.style}}>
    {
      props.localizacao ?
      <Image 
        style={styles.mapaImagem}
        source={{uri: mapaURL}}
      />
      :
      props.children
    }
    </View>
  )
}

export default PreviewDoMapa

const styles = StyleSheet.create({
  previewDoMapa: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapaImagem: {
    width: '100%',
    height: '100%'
  }
})
