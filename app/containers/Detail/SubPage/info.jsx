import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail.js'

class Info extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      info:false
    };
  }
  render() {
    return (
      <div>
        {
          this.state.info ? 'ok':'loading'
        }
      </div>
    )
  }

  componentDidMount() {
    getInfoData(this.props.id)
      .then(res=>{return res.json()})
      .then(res=>{this.setState({info:res})});
  }
}

export default Info
