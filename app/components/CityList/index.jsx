import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div className='cityList'>
         <h3>Citys</h3>
         <ul>
           <li><span onClick={this.handler.bind(this)}>北京</span></li>
           <li><span onClick={this.handler.bind(this)}>北京2</span></li>
           <li><span onClick={this.handler.bind(this)}>北京3</span></li>
           <li><span onClick={this.handler.bind(this)}>北京4</span></li>
           <li><span onClick={this.handler.bind(this)}>北京5</span></li>
           <li><span onClick={this.handler.bind(this)}>北京6</span></li>
           <li><span onClick={this.handler.bind(this)}>北7</span></li>
           <li><span onClick={this.handler.bind(this)}>北8</span></li>
           <li><span onClick={this.handler.bind(this)}>北9</span></li>
           <li><span onClick={this.handler.bind(this)}>北京7</span></li>
           <li><span onClick={this.handler.bind(this)}>北京8</span></li>
           <li><span onClick={this.handler.bind(this)}>北京9</span></li>
          </ul>
      </div>
    )
  }
  handler(event) {

    if (event.target.textContent) {
      this.props.choose(event.target.textContent);
    }
  }
}



export default CityList
