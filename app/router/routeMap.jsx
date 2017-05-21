import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'



import App from '../containers'
import Home from '../containers/Home'



class RouteMap extends React.Component {
  render() {
    return (
      <Router history={this.props.history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}>
          </IndexRoute>

        </Route>


      </Router>
    )
  }

}

export default RouteMap
