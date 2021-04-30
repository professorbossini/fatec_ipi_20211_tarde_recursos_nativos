import React from 'react';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import lugaresReducer from './store/lugares-reducers';
import { init } from './helpers/db';

const rootReducer = combineReducers({
  lugares: lugaresReducer
})

const store = createStore (rootReducer, applyMiddleware(reduxThunk));

init().then(() =>{
  console.log('Criação da base ocorreu com sucesso.')

}).catch((err) => {
  console.log('Criação da base falhou: ' + err);
})


import LugaresNavigator from './navegacao/LugaresNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>
  )
  
}

