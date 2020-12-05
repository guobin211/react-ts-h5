import React, { useEffect } from 'react';
import MtButtonComponent from 'class-components/mt-button/mt-button.component';
import { reduxStore } from 'redux-store';
import { UserInfoAction } from 'redux-store/user-info/user-info.vm';
import { map } from 'lodash-es';

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
  const subs = reduxStore.subscribe(() => {
    const data = reduxStore.getState();
    console.log('changed', data);
  });

  useEffect(() => {
    const data = reduxStore.getState();
    fetch('https://meeting.tencent.com/wemeet-webapi/v2/account/login/refresh-token')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    for (const num of [1, 2, 3]) {
      console.log(num);
    }

    console.log(map([1, 2, 3], el => el + 1));
    // 1
    console.log('useEffect', data.userInfo);
    // 同步更改数据
    reduxStore.dispatch({ type: UserInfoAction.UPDATE, data: { userName: 'jack' } });
    // 3
    console.log('dispatch', reduxStore.getState());
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
