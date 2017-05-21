import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'



import App from '../containers'
import Home from '../containers/Home'
import NotFound from '../containers/404'



class RouteMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}>
          </IndexRoute>
          <Route path='*' component={NotFound}></Route>
        </Route>


      </Router>
    )
  }

}

export default RouteMap
