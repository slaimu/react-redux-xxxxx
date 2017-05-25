import * as actionTypes from '../constants/userInfo'
import {CITYNAME} from '../config/localStorageKey'
import LocalStorage from '../util/localStorage'

const initialState = {
  CITYNAME: LocalStorage.getItem(CITYNAME)
}

export default function userInfo(state=initialState, action) {
  switch(action.type) {
    case actionTypes.USERINFO_UPDATE:
      return action.data;
    default:
      return state;
  }
}
