import React from 'react'
import {Provider} from 'react-redux'
import {hashHistory} from 'react-router'
import {render} from 'react-dom'
import configureStore from './store/configureStore'
import RouteMap from './router/routeMap'


import './static/css/common.less'
import './static/css/font.css'


const store = configureStore()


render(
  <Provider store={store}>
     <RouteMap history={hashHistory}></RouteMap>
  </Provider>,
  document.querySelector('#root')
)
