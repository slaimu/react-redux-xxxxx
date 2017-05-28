import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'
import LoginComponent from '../../components/LoginComponent'
import {hashHistory} from 'react-router'



class Login extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      check:false
    }
  }
  render() {
    return (
      <div>
        <Header value='Login'/>
        {
           this.state.check ? <LoginComponent handler={this.handler.bind(this)} />:<div>'Loading'</div>
        }
      </div>
    )
  }
  goToUserPage() {
    hashHistory.push('/User');

  }
  componentDidMount() {
    if (this.props.userInfo.userName) {
      this.goToUserPage();
    } else {
      this.setState({
        check:true
      });
    }
  }

  handler(userName){
    var userInfo = this.props.userInfo;
    userInfo.userName=userName;
    this.props.userInfoActions.update(userInfo);
    this.goToUserPage();

  }
}




function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}


function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
