import React, { useEffect } from 'react';
import { reduxStore } from './redux-store';
import { UserInfoAction } from './redux-store/user-info/user-info.vm';

export interface AppProps {
  className?: string
}

const App: React.FC<AppProps> = (props) => {
  const { className, children, ...restProps } = props;
  /**
   * 订阅数据, 2
   */
  const subs = reduxStore.subscribe(() => {
    const data = reduxStore.getState();
    console.log('changed', data);
  });

  useEffect(() => {
    const data = reduxStore.getState();
    // 1
    console.log('useEffect', data.userInfo);
    // 同步更改数据
    reduxStore.dispatch({type: UserInfoAction.UPDATE, data: { userName: 'jack'}});
    // 3
    console.log('dispatch', reduxStore.getState());

    return () => {
      // 取消订阅
      subs();
    }
  }, [subs]);

  return (
      <div {...restProps}> App {children} </div>
  );
};

export default App;
