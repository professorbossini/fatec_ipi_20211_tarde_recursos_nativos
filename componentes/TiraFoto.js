import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker';

import Cores from '../constantes/Cores';

const TiraFoto = (props) => {

  const[imagemURI, setImagemURI] = useState();

  const tirarFoto = async () => {
    // ImagePicker.launchCameraAsync({
    //   allowsEditing: true,
    //   aspect: [16,9],
    //   quality: 1
    // }).then(foto => {
    //   console.log(foto);
    // });
    const foto = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1
    });
    //console.log(foto);
    setImagemURI(foto.uri)
    props.onFotoTirada(foto.uri);
  }

  return (

    <View style={styles.principal}>
      <View style={styles.previewDaImagem}>
      {
        imagemURI ?
        <Image 
        style={styles.imagem} 
        source={{uri: imagemURI}}
        />
        :
        <Text>Nenhuma foto.</Text>
      }
      </View>
      <Button 
        title="Tirar foto"
        color={Cores.primary}
        onPress={tirarFoto}
      />
    </View>

  )

}

const styles = StyleSheet.create({
  principal: {
    alignItems: 'center',
    marginBottom: 16
  },
  previewDaImagem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderColor: '#CCC',
    borderWidth: 1
  },
  imagem: {
    width: '100%',
    height: '100%'
  }
})

export default TiraFoto;

