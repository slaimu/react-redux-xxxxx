import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Message from '../../components/Message'
import CityList from '../../components/CityList'
import {CITYNAME} from '../../config/localStorageKey'
import {bindActionCreators} from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userInfo'


import {connect} from 'react-redux'


class City extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header value='choose city'/>
        <Message value={this.props.userInfo.cityName} />
        <CityList choose={this.choose.bind(this)} />
      </div>
    )
  }


  choose(value) {
    this.props.userInfoActions.update({
      cityName:value
    })
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
)(City)
