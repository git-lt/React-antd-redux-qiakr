import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Affix , Row, Col} from 'antd';

import NavPath from '../../components/NavPath'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import { logout } from '../../store/actions'

import 'antd/style/index.less';
import './index.less';

@connect(
  state => ({
    user: state.user ? state.user : null
  }),
  dispatch => ({
    logout: bindActionCreators( logout, dispatch )
  })
)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    user: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  static contextTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  componentWillMount() {
    // const {actions} = this.props;
    // actions.fetchProfile();
  }

  render() {
    const {user, logout} = this.props;

    return (
      <div className="ant-layout-aside">
        <Sidebar />
        <div className="ant-layout-main">
          <Header user={user} />
          <NavPath />
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              {this.props.children}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}


export default App;
