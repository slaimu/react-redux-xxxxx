import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getAdData} from '../../../fetch/home/home.js'
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div>
          {
            this.state.data.length?
            <HomeAd data = {this.state.data} /> : <span>loading......</span>
          }
      </div>
    )
  }
  componentDidMount() {
    var that = this;
    getAdData()
      .then(function(data) {
        return data.json();
      })
      .then(function (data) {
        if (data.length > 0) {
          that.setState({
            data: data
          });
        }
      });
  }
}



export default Ad
