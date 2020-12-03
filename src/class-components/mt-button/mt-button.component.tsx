import React from 'react';

export interface MtButtonComponentProps {
  className?: string;
}

export interface MtButtonComponentState {
  initProps?: MtButtonComponentProps
}

class MtButtonComponent extends React.Component<MtButtonComponentProps, MtButtonComponentState> {
  render() {
    return <div className="MtButtonComponent">MtButtonComponent</div>;
  }
}

export default MtButtonComponent;
