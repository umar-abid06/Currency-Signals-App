import 'react-native-gesture-handler';
import React from 'react';
import MainNavigator from './src/navigator/MainNavigator';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import cartReducer from './src/store/reducers/cart';
import ordersReducer from './src/store/reducers/orders';
import cardsReducer from './src/store/reducers/cards';
import {applyMiddleware} from 'redux';

const rootReducer = combineReducers({
  cards: cardsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  // auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
