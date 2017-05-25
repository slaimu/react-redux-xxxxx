import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Message extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='message'>
        <span>{this.props.value}</span>
      </div>
    )
  }
}



export default Message
