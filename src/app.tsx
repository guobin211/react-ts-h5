import React, { useEffect } from 'react';
import MtButtonComponent from 'class-components/mt-button/mt-button.component';
import { RootStore } from 'storage';
import { UserInfoAction } from 'storage/user-info/user-info.action';

export interface AppProps {
  className?: string;
}

function testTypeCheck(name: string) {
  console.log(name);
}

const App: React.FC<AppProps> = () => {
  /**
   * 订阅数据, 2
   */
  const subs = RootStore.subscribe(() => {
    const data = RootStore.getState();
    console.log('changed', data);
  });

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = RootStore.getState();

    // 1
    // 同步更改数据
    RootStore.dispatch({ type: UserInfoAction.UPDATE, data: { userName: 'jack' } });
    // 3
    testTypeCheck('12');
    return () => {
      // 取消订阅
      subs();
    };
  }, [subs]);

  return (
    <div>
      App
      <MtButtonComponent />
      <div>UserProfile</div>
    </div>
  );
};

export default App;
