import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../storage';
import { UserInfoVm } from '../../storage/user-info/user-info.vm';

/**
 * 私有接口
 */
interface MtButtonComponentSelfProps {
  className?: string;
}

interface MtButtonComponentState {
  initProps?: MtButtonComponentProps;
}

/**
 * 公开接口
 */
export type MtButtonComponentProps = MtButtonComponentSelfProps & { userInfo: UserInfoVm };

/**
 * 扩展props函数
 * @param state
 * @param props
 */
function mapStateToMtButtonComponentProps(
  state: RootState,
  props: MtButtonComponentSelfProps,
): MtButtonComponentSelfProps & { userInfo: UserInfoVm } {
  return {
    ...props,
    userInfo: state.userInfo,
  };
}

/**
 * 组件
 */
class MtButtonComponent extends React.Component<MtButtonComponentProps, MtButtonComponentState> {
  render() {
    console.log('MtButtonComponent', 'render', this.props);
    return (
      <div className="MtButtonComponent">
        <h1>MtButtonComponent</h1>
      </div>
    );
  }
}

/**
 * 绑定数据
 */
const MtButton = connect(mapStateToMtButtonComponentProps)(MtButtonComponent);

/**
 * 默认导出
 */
export default MtButton;
