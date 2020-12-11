import { combineReducers, createStore, applyMiddleware, compose, Middleware } from 'redux';
import { userInfoReducer } from './user-info';
import { UserInfoVm } from './user-info/user-info.vm';
import { changeLog } from './plugins/change-log';

export interface RootState {
  userInfo: UserInfoVm;
}

export type RootStateNameSpace = keyof RootState;

/**
 * 中间件
 */
const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { createLogger } = require('redux-logger');
  middlewares.push(changeLog(createLogger));
}

/**
 * 合并的reducer
 */
const rootReducer = combineReducers<RootState>({
  userInfo: userInfoReducer,
});

/**
 * redux全局state
 */
export const RootStore = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);
