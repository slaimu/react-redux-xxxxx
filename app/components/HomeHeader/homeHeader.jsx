import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


class HomeHeader extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

  }

  render() {
    return (
      <nav className='nav home-header'>
        <div className='left home-header-left'>
          <a href='/#City'>
           <span>{this.props.cityName}</span>
          </a>
         <i className='icon-angle-down'></i>
        </div>
        <div className='right home-header-right'>
          <i className='icon-user'></i>
        </div>
        <div className='home-header-middle'>
          <div className='search-container'>
            <i className='icon-search'></i>
            <input type='text' placeholder='search......' />
          </div>
        </div>
      </nav>
    )
  }



}


export default HomeHeader
