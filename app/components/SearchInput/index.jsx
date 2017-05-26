import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {hashHistory} from 'react-router'
import './style.less'


class SearchInput extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      value: this.props.value
    }
  }
  render() {
    return (
      <div className='search-input'>
        <i className='icon-search'></i>
        <input value = {this.state.value} type='text' placeholder='search......'
          onChange = {this.change.bind(this)}
          onKeyUp = {this.keyUp.bind(this)}
         />
      </div>
    )
  }

  change (event) {
    this.setState({
      value: event.target.value
    });
  }
  keyUp(event) {
    if (event.keyCode === 13) {
      hashHistory.push('/search/all/' +  encodeURIComponent(this.state.value));
    }
  }

}



export default SearchInput
