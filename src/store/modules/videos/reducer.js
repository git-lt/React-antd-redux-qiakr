import types from '../../types'

const InitState = {
  list: [],
  count: 0,
  loading: false,
  errmsg: ''
}

export default function videos(state = InitState, action = {}) {
  switch (action.type) {
    case `${types.GET_VIDEOS_BY_TYPE}_LOADING`:
      return Object.assign({}, state, {loading: true});
    case `${types.GET_VIDEOS_BY_TYPE}_SUCCESS`:
      let data = action.payload.result;
      return Object.assign({}, state, {
        list: data.list,
        loading: false,
        count: data.count
      });
    case `${types.GET_VIDEOS_BY_TYPE}_ERROR`:
      return Object.assign({}, state, {
        loading: false,
        errmsg: types.ERROR_SERVER
      });
    default:
      return state;
  }
}
