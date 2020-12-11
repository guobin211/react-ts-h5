import { UserInfoAction } from '../user-info/user-info.action';

/**
 * 转换value为枚举
 * @param type ActionEnum的值
 * @example 此文件的代码通过脚本生成，扫描storage下的 "*.action.ts" 文件自动生成, user-info.action.ts
 */
export function transformEnum(type: unknown): string {
  switch (type) {
    case UserInfoAction.RESET:
      return 'UserInfoAction.RESET';

    case UserInfoAction.UPDATE:
      return 'UserInfoAction.UPDATE';

    default:
      return 'unknown action';
  }
}
