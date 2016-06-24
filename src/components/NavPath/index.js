import React, {PropTypes} from 'react'
import { bindActionCreators } from 'redux'
import { Breadcrumb } from 'antd'
import { connect } from 'react-redux'

import './index.less'

@connect(
  state => ({
    navpath: state.menu.navpath
  })
)

class NavPath extends React.Component {
  constructor (props) {
    super(props)
  }
  static defaultProps = {
    navpath: []
  }

  static propTypes = {
    navpath: PropTypes.array
  }

  render () {
    const { navpath } = this.props
    const bread = navpath.map((item)=>{
      return (
        <Breadcrumb.Item key={'bc-'+item.key}>{item.name}</Breadcrumb.Item>
      )
    })
    return (
      <div className="ant-layout-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item key='bc-0'>首页</Breadcrumb.Item>
          {bread}
        </Breadcrumb>
      </div>
    )
  }
}

export default NavPath
