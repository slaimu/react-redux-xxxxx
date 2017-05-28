import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput'
import {Link} from 'react-router'

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
          <Link to='/Login'>
            <i className='icon-user'></i>
          </Link>
        </div>
          <SearchInput value = ""/>
      </nav>
    )
  }

}


export default HomeHeader
