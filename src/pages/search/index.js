import React, { Component } from 'react'
import { connect } from 'dva';
import { SearchBar, Modal, Menu, Toast} from 'antd-mobile';
import router from 'umi/router';

class ClassPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className='search_cart'>
        我是一个搜索页面
      </div>
    )
  }
}


export default ClassPage;
