import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../storage';

/**
 * props接口
 */
export interface MtButtonComponentSelfProps {
  className?: string;
}

interface MtButtonComponentState {
  disable?: boolean;
}

/**
 * 组件的props
 */
type MtButtonComponentProps = ReturnType<typeof mapStateToMtButtonComponentProps>;

/**
 * 扩展props函数
 * @param state 从redux中取公共的state
 * @param props 组件自身的props
 */
function mapStateToMtButtonComponentProps(state: RootState, props: MtButtonComponentSelfProps) {
  return {
    ...props,
    userInfo: state.userInfo,
  };
}

/**
 * 组件
 */
class MtButtonComponent extends React.Component<MtButtonComponentProps, MtButtonComponentState> {
  /**
   * 传入的props发生变换, 将props转换为组件内state，内部管理状态
   * @param nextProps
   * @param prevState
   */
  static getDerivedStateFromProps(nextProps: MtButtonComponentProps, prevState: MtButtonComponentState) {
    if (nextProps.userInfo.userName !== 'admin' && !prevState.disable) {
      return {
        disable: true,
      };
    }
    return null;
  }

  constructor(props: MtButtonComponentProps) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('MtButtonComponent', 'render', this.state);
    return (
      <div className={this.props.className}>
        <h3>name: {this.props.userInfo.userName}</h3>
        <button type="button" disabled={this.state.disable}>
          MtButtonComponent
        </button>
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
