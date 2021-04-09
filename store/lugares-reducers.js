import * as lugaresActions from './lugares-actions';
import Lugar from '../modelo/Lugar';

const estadoInicial = {
  lugares: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type){
    case lugaresActions.ADD_LUGAR:
      const lugar = new Lugar(new Date().toString(), action.dadosLugar.nomeLugar);
      return {
        lugares: estado.lugares.concat(lugar)
      }
    default:
      return estado;   
  }
}