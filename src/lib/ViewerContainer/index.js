// viewerContainer viewer容器

import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../ImageContainer';

const screenWidth = typeof document !== 'undefined' && document.documentElement.clientWidth;
const screenHeight = typeof document !== 'undefined' && document.documentElement.clientHeight;

class viewerContainer extends React.Component {    
  constructor(...args){
    super(...args);     
    this.imageContainerSize = {         
      width: screenWidth, //图片容器宽度
      height: this.props.imageWrapperHeight,      
    }  
  }
  componentDidMount(){   
    
  } 
  componentWillReceiveProps(nextProps){
  }
  handleClose(){
      this.props.onClose()
  } 
  getContainerStyle(){
    const style = {}
    const { opacity, zIndex } = this.props;
    style.background = `rgba(0,0,0,${opacity})`
    style.zIndex = zIndex
    return style
  }
 
  render() { 
    let { show } = this.props;    
    if(!show){
        return null
    }      
    return (
      <div 
          style={this.getContainerStyle()}
          className="image-previewer-container" 
          onClick={()=>this.handleClose()}>       
          {/*viewer容器组件
          <button onClick={()=>this.handleClose()}>关闭</button>*/}
         
          <ImageContainer  
              onClick={()=>this.handleClose()} 
              {...this.props}            
              imageContainerSize = { this.imageContainerSize }
              imageList = {this.props.imageList}
              curImageIndex = { this.props.curImageIndex }             
          />
         
      </div>
    ); 
  }
}

export default viewerContainer
