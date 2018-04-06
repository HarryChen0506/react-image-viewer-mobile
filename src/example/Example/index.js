//示例组件
import React from 'react';
import MockData from './mockData.js';
import './example.css'

import News from '../News';


class Example extends React.Component {
  constructor(...args){
    super(...args)
    this.state = {
        // content: MockData.text
        content: '<h2 id="box">正在加载异步内容，请稍等三秒...</h2>'
    }
  }
  componentDidMount(){
      console.log('容器挂载了');
      this.changeContent();
  }
  changeContent(){
    setTimeout(()=>{
        this.setState({
            content: MockData.text
        })
    },3000)
  }
  render() {
    return (
      <div className="example">
        <News content={this.state.content}/>
      </div>
    );
  }
}

export default Example