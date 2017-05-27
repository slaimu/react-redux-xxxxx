import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

import Info from './SubPage/info'

class Detail extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <Header value='Detail'/>
        <Info id={this.props.params.id} />
        <span>{this.props.params.id}</span>
      </div>
    )
  }
}



export default Detail
