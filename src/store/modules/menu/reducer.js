import types from '../../types'

const InitState = {
  currentKey: '1',
  items: [],
  navpath: []
}

export default function menu(state = InitState, action = {}) {
  switch (action.type) {
    case `${types.GET_ALL_MENU}_SUCCESS`:
      return Object.assign({}, state, {'items': action.payload})
    case types.UPDATE_NAVPATH:
      let navpath = [], key = action.payload.key;
      if(key.indexOf('-')>-1){
        let pKey = key.split('-')[0];
        state.items.forEach(function(v){
          if(+v.key === +pKey && v.child && v.child.length){
            navpath.push({
                key: v.key+'',
                name: v.name
            })
            v.child.forEach(function(o){
              if(o.key === key ){
                return navpath.push({
                  key: o.key+'',
                  name: o.name
                })
              }
            })
          }
        });
      }else{
        state.items.forEach(function(v){
          if(+v.key === +key){
            return navpath.push({
              key: v.key+'',
              name: v.name
            })
          }
        });
      }

      return Object.assign({}, state, {'navpath': navpath,'currentKey': key });
    default:
      return state;
  }
}
