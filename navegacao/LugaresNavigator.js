import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Cores from '../constantes/Cores';
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import MapaTela from '../telas/MapaTela';

const LugaresNavigator = createStackNavigator({
  ListaDeLugares: ListaDeLugaresTela,
  DetalhesDoLugar: DetalhesDoLugarTela,
  NovoLugar: NovoLugarTela,
  Mapa: MapaTela 
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
  }
}
);

export default createAppContainer(LugaresNavigator);
