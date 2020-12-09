import { combineReducers, createStore } from 'redux';
import { userInfoReducer } from './user-info';
import { UserInfoVm } from './user-info/user-info.vm';

export interface RootState {
  userInfo: UserInfoVm;
}

const rootReducer = combineReducers<RootState>({
  userInfo: userInfoReducer,
});

export const reduxStore = createStore(rootReducer);
