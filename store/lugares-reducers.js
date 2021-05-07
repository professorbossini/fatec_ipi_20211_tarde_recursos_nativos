import * as lugaresActions from './lugares-actions';
import Lugar from '../modelo/Lugar';

const estadoInicial = {
  lugares: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type){
    case lugaresActions.ADD_LUGAR:
      const lugar = new Lugar(action.dadosLugar.id.toString(), action.dadosLugar.nomeLugar, action.dadosLugar.imagem);
      return {
        lugares: estado.lugares.concat(lugar)
      }
    case lugaresActions.LISTA_LUGARES:
      return {
        lugares: action.lugares.map ((lugar) => {
          let aux = new Lugar(lugar.id.toString(), lugar.nome, lugar.imagemURI);
          console.log (`aux: ${JSON.stringify(aux)}`)
          return aux;
        })
      }
    default:
      return estado;   
  }
}