import React from 'react'
import {Provider} from 'react-redux'
import {hashHistory} from 'react-redux'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import RouteMap from './router/routeMap'

const store = configureStore()


render(
  <Provider store={store}>
     <RouteMap history={hashHistory}></RouteMap>
  </Provider>,
  document.querySelector('#root')
)
