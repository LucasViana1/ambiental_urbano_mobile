import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Registros from './pages/Registros';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Registros,
    Cadastro,
  }),
);
