import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import rootStore from './store';

import App from './views/App';
import Home from './views/Home';
import Login from './views/Login';
import NewsList from './views/News/list'
import VideosList from './views/Videos/list'
// import BannersList from './views/Banners/list'

import { getCookie } from './utils';

const store = rootStore();
const history = syncHistoryWithStore(browserHistory, store)

// 登录验证
const authentication = function (next, replace, callback) {
  const isLoggedIn = !!getCookie('uid')
  if (!isLoggedIn && next.location.pathname != '/login') {
    replace('/login')
  }
  callback()
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route path="/" onEnter={authentication}>
          <IndexRedirect to="news" />
          <Route component={ App }>
            <Route path="home" component={Home}/>
            <Route path="news" component={NewsList}/>
            <Route path="videos" component={VideosList}/>
          </Route>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
// <Route path="*" component={NoMatch}/>
