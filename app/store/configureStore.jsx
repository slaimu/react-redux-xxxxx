import {createStore} from 'redux'
import rootReducer from '../reducers'
import LocalStorage from '../util/localStorage'
import {CITYNAME} from '../config/localStorageKey'



export default function configureStore(initialState){
  let store= createStore(rootReducer, initialState, window.devToolsExtension? window.devToolsExtension: undefined);
  store.subscribe(() =>{
    console.log( store.getState().userInfo.cityName)
    LocalStorage.setItem(CITYNAME, store.getState().userInfo.cityName);
  });
  return store;
}
