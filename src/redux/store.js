import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import calculationReducer from './calculation/calculationReducer';

const rootReducer = combineReducers({
  value: calculationReducer,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
