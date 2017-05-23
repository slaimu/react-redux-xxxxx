import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader/homeHeader'
import {connect} from 'react-redux'
import Category from '../../components/Category'
import Ad from './subpage/Ad'



class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return  (
      <div>
        <HomeHeader cityName={this.props.userInfo.cityName}></HomeHeader>
        <Category />
        <Ad />
      </div>
    )
  }
}





function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  };
}


function mapDispatchToProps(dispatch) {
  return{};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
