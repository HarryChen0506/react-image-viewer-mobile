// viewerContainer viewer容器

import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from '../ImageContainer';
import Carousel from 'nuka-carousel';
import Image from '../Image';

const screenWidth = typeof document !== 'undefined' && document.documentElement.clientWidth;
const screenHeight = typeof document !== 'undefined' && document.documentElement.clientHeight;

class viewerContainer extends React.Component {    
  constructor(...args){
    super(...args);  
    this.changeIndex = this.changeIndex.bind(this)   
    this.imageContainerSize = {         
      width: screenWidth, //图片容器宽度
      height: this.props.imageWrapperHeight,      
    }  
    this.state = {
      curImageIndex: this.props.curImageIndex
    }
  }
  componentDidMount(){   
    
  } 
  componentWillReceiveProps(nextProps){
      let { curImageIndex } = nextProps; 
      if(curImageIndex!==this.state.curImageIndex){
          this.setState({
          curImageIndex: nextProps.curImageIndex
        })
      }
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
  changeIndex(index){   
    this.setState({
      curImageIndex: index
    })
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
         
          {/*<ImageContainer  
              onClick={()=>this.handleClose()} 
              {...this.props}            
              imageContainerSize = { this.imageContainerSize }
              imageList = {this.props.imageList}
              curImageIndex = { this.props.curImageIndex }             
          />*/}
          <div style={{width: '100%',height:this.imageContainerSize.height,position:'relative'}}>   
            <div className="image-previewer-list-index">
                <span>{this.state.curImageIndex+1}/{this.props.imageList.length}</span>
            </div>        
            <Carousel 
              style={{width: '100%',height:this.imageContainerSize.height}}
              afterSlide={this.changeIndex}
              cellSpacing={this.props.gap}
              initialSlideHeight={this.imageContainerSize.height}
              slideIndex={this.state.curImageIndex}
              renderCenterLeftControls={({ previousSlide }) => (
                <span></span>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <span></span>
              )}
              renderBottomCenterControls={({ nextSlide }) => (
                <span></span>
              )}
            >
               {this.props.imageList.map((v,i)=>{
                    return (
                        <span 
                            className="image-previewer-list-box"
                            key={v.src+'_'+i}
                            style={{width: this.imageContainerSize.width+'px',  
                                    height:this.imageContainerSize.height+'px',                                   
                                    display: 'inline-block'                            
                                    }}
                        >                            
                            {v.src?<Image src={v.src} />:(<span>loading</span>)}
                        </span>                        
                    )
                })}
              </Carousel>          
          </div>

         
      </div>
    ); 
  }
}

export default viewerContainer
