export class UserInfoVm {
  userName: string;
  constructor() {
    this.userName = '';
  }
}

export enum UserInfoAction {
  RESET,
  UPDATE
}
