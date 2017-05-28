import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'



import App from '../containers'
import Home from '../containers/Home'
import NotFound from '../containers/404'
import City from '../containers/City'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import Login from '../containers/Login'

class RouteMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}>
          </IndexRoute>
          <Route path='/City' component={City}></Route>
          <Route path='/Search/:category(/:keywords)' component={Search}></Route>
          <Route path='/Detail/:id' component={Detail}></Route>
          <Route path='/Login' component={Login}></Route>
          <Route path='*' component={NotFound}></Route>
        </Route>


      </Router>
    )
  }

}

export default RouteMap
