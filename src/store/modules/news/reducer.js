import types from '../../types'
import STATUS_CODE from '../../../constants/statusCode'

const InitState = {
  list: [],
  count: 0,
  loading: false,
  status: '',
  current: {},
  errmsg: ''
}

export default function news(state = InitState, action = {}) {
  let data = {};
  switch (action.type) {
    case `${types.GET_NEWS_BY_TAG}_SUCCESS`:
      data = action.payload;
      return Object.assign({}, state, {
        list: data.result.list,
        loading: false,
        count: data.result.count,
        errmsg: data.errmsg || STATUS_CODE['500'],
        status: data.status,
      });
    case `${types.DEL_NEWS}_SUCCESS`:
    case `${types.UPDATE_NEWS_STATUS}_SUCCESS`:
    case `${types.CREATE_NEWS}_SUCCESS`:
    case `${types.UPDATE_NEWS}_SUCCESS`:
      data = action.payload;
      return Object.assign({},state,{
        loading: false,
        errmsg: data.errmsg || STATUS_CODE['500'],
        status: data.status,
      });
    case `${types.GET_NEWS_BY_TAG}_LOADING`:
    case `${types.DEL_NEWS}_LOADING`:
    case `${types.UPDATE_NEWS_STATUS}_LOADING`:
    case `${types.CREATE_NEWS}_LOADING`:
    case `${types.UPDATE_NEWS}_LOADING`:
      return Object.assign({}, state, {
        loading: true,
      });
    case `${types.GET_NEWS_BY_TAG}_ERROR`:
    case `${types.DEL_NEWS}_ERROR`:
    case `${types.UPDATE_NEWS_STATUS}_ERROR`:
    case `${types.CREATE_NEWS}_ERROR`:
    case `${types.UPDATE_NEWS}_ERROR`:
      return Object.assign({}, state, {
        loading: false,
        status: '500',
      });
    default:
      return state;
  }
}
