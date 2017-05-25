import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import {connect} from 'react-redux'


class City extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <Header value='choose city'/>
    )
  }
}




function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}


function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
