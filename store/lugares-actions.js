import * as FileSystem from 'expo-file-system';
export const ADD_LUGAR = 'ADD_LUGAR';

export const addLugar = (nomeLugar, imagem) => {
  
  return async dispatch => {
    const nomeArquivo = imagem.split('/').pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    try{
      await FileSystem.moveAsync({
        from: imagem,
        to: novoPath
      })
      dispatch({type: ADD_LUGAR, dadosLugar: {nomeLugar: nomeLugar, imagem: novoPath}});
    }
    catch (err){
      console.log(err);
      throw err;
    }

  }
  // return {
  //   type: ADD_LUGAR,
  //   dadosLugar: {nomeLugar: nomeLugar, imagem: imagem}
  // }
}