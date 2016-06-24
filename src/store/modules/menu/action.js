import api from '../../../api'
import types from '../../types'


export function getAllMenu() {
  return {
    type: types.GET_ALL_MENU,
    payload: {
      promise: api.menus()
    }
  }
}

export function updateNavPath(key) {
  return {
    type: types.UPDATE_NAVPATH,
    payload: {
      key: key
    }
  }
}
