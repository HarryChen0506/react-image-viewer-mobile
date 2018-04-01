// image-previewer 入口

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ViewerContainer from './ViewerContainer';
import './previewer.css';

class ImagePreviewer extends React.Component {    
  constructor(...args){
    super(...args);
    this.async = this.props.async;
    // console.log('async', this.async);
    this.div = document.createElement('div');
    this.imageNodeList = [];
    this.state = {
        showViewer: false,
        curImageIndex: 0,
        imageList:[]
    }
  }
  componentDidMount(){
    // console.log('viewer组件挂载了');
    if(!this.async){  //如果同步则挂载执行
        this.init()
    }
    document.body.appendChild(this.div);
  }
  componentWillUnmount(){
    // console.log('unmount')
    this.unbindImages()
  }
  init(){
    this.bindImages();
    this.getImageList();
  } 
  getImageList(){
      const imageNodeList = this.getChildrenImages();       
      let imageList = [].map.call(imageNodeList,(v,i)=>{          
          return {
            src: v.src,
            title: v.title
          }
      })
      // console.log('imageList', imageList)
      this.setState({
        imageList: imageList
      })
  }
  bindImages(){
      //给每张图片绑定事件
      this.imageNodeList = this.getChildrenImages();
      this.imageNodeList.forEach((v,i)=>{
          this.bindEvent(v, 'click',this.clickImageListener.call(this, i))
      })
  } 
  unbindImages(){
     //解绑
      this.imageNodeList.forEach((v,i)=>{
          this.unbindEnent(v, 'click',this.clickImageListener.call(this, i))
      })
  }
  clickImageListener(index){ 
    return ()=>{
      this.handleClickImage(index);
    }   
  }
  getChildrenImages(){
    const node = ReactDOM.findDOMNode(this.el);
    const images = node.querySelectorAll('img');
    // console.log('images', images)  
    return images 
  }
  bindEvent(node, eventType, listener){
    node.addEventListener(eventType,listener, false)
  }
  unbindEnent(node, eventType, listener){
    node.removeEventListener(eventType,listener)
  }
  showViewer(){ //显示viewer组件
    this.setState({
        showViewer: true
    })
  }
  closeViewer(){  //隐藏viewer组件
    this.setState({
        showViewer: false
    })
  }
  handleClickImage(imageIndex){ //点击图片后的回调
    this.setState({
        curImageIndex: imageIndex
    })
    this.showViewer();
  }
  componentDidUpdate(){
    //  console.log('viewer组件接受props');
     if(this.async){  //如果异步则更新执行
        this.init()
     }
  }
  render() {    
    return (
      <div ref={(el) => this.el = el}>       
        {this.props.children}
        { ReactDOM.createPortal(
            <ViewerContainer 
                show={this.state.showViewer} 
                onClose={()=>this.closeViewer()}
                imageList = {this.state.imageList}
                curImageIndex = { this.state.curImageIndex }
                {...this.props}
            />,
            this.div,
        )}
      </div>
    ); 
  }
}
ImagePreviewer.propTypes = {
    async: PropTypes.bool.isRequired, // 内容是否异步，必须
    imageWrapperHeight: PropTypes.number, 
    opacity:PropTypes.number,
    zIndex:PropTypes.number,
    gap:PropTypes.number,
}
ImagePreviewer.defaultProps = {
  async: true,
  imageWrapperHeight: 300,
  opacity:1,
  zIndex: 1000,
  gap: 10,
}

export default ImagePreviewer