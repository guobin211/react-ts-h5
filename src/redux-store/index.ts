import { combineReducers, createStore } from 'redux';
import { userInfoReducer } from './user-info';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
});

export const reduxStore = createStore(rootReducer);
