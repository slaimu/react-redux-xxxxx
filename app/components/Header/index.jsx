import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class Header extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <header className='header'>
          <div className='back' onClick={this.handler}>
            <i className='icon-chevron-left'></i>
          </div>
          <div className='content'>
            <span>{this.props.value}</span>
          </div>
        </header>
      </div>


    )
  }
  handler() {
    window.history.back();
  }
}



export default Header
