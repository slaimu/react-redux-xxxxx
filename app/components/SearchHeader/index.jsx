import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import SearchInput from '../SearchInput/'

class SearchHeader extends React.Component{
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return (
      <div>
        <header className='search-header'>
          <span className='search-back' onClick={this.handler}>
             <i className='icon-chevron-left'></i>
          </span>
          <div className='content'>
            <SearchInput value={this.props.value} />
          </div>
        </header>
      </div>
    )
  }
  handler() {
    window.history.back();
  }

}



export default SearchHeader
