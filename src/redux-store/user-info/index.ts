import { UserInfoAction, UserInfoVm } from './user-info.vm';

const userInfo = new UserInfoVm();

export const userInfoReducer = (state = userInfo, action: { type: UserInfoAction; data?: Partial<UserInfoVm> }) => {
  switch (action.type) {
    case UserInfoAction.RESET:
      return new UserInfoVm();
    case UserInfoAction.UPDATE:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
};
