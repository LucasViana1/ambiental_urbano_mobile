import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Registros from './pages/Registros';
import Cadastro from './pages/Cadastro';

export default createAppContainer(
  createSwitchNavigator({
    Cadastro,
    Registros,
  }),
);
