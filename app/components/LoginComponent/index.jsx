import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoginComponent extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      userName:''
    }
  }
  render() {
    return (
      <div className='login'>
         <div className='login-container login-phone'>
           <i className='icon-tablet'></i>
           <input type='text' onChange={this.handler.bind(this)} value={this.state.userName} placeholder='phone...'></input>
         </div>
         <div className='login-container login-password'>
           <i className='icon-key'></i>
           <button>send sms</button>
           <input type='text' placeholder='password...'></input>
         </div>
         <button className='btn-login' onClick={this.loginHandler.bind(this)}>Login</button>
      </div>
    )
  }
  handler(event) {
    this.setState({
      userName:event.target.value
    });
  }
  loginHandler(){
    this.props.handler(this.state.userName);
  }

}



export default LoginComponent
