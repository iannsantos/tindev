import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Main from './pages/Main';

export default createAppContainer( // precisa ficar por volta de toda navegação
  createSwitchNavigator({ // desabilita várias funções e cabeçalhos automáticos (não cria a pilha de telas)
    Login,
    Main,
  })
);