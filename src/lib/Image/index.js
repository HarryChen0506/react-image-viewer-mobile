//图片组件
import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component {
  constructor(...args){
    super(...args) 
    // console.log('this.props', this.props, 12)
    this.state = {
        img: {
            src: '',
            width: 0,
            height:0,
        } 
    } 
  }
  componentDidMount(){   
    //  this.imageResize()     
  }  
  componentWillReceiveProps(nextProps){
    //  console.log(' this.nextProps', nextProps)
    //  this.imageResize() 
  }
  calContainerSize(){  //计算容器尺寸
      const node_container = ReactDOM.findDOMNode(this.imageContainer);
      return node_container.getBoundingClientRect();
  }
  imageResize(naturalWidth, naturalHeight){  //图片自适应
      const size = this.calContainerSize();
      //   console.log('imageContainer', size)
      this.maxWidth = size.width;  //容器的宽度最大值
      this.maxHeight = size.height;  //容器的高度最大值   
      this.autoSize(naturalWidth, naturalHeight)
  }
  autoSize(naturalWidth=0, naturalHeight=0){

    const src = this.props.src;
    const maxWidth = this.maxWidth;
    const maxHeight = this.maxHeight;  
    
    let width = 0;
    let height = 0;
   
    // // 当图片比图片框小时不做任何改变   
    if (naturalWidth < maxWidth && naturalHeight < maxHeight) {  
        width = naturalWidth;  
        height = naturalHeight;  
    }else {  //原图片宽高比例 大于 图片框宽高比例,则以框的宽为标准缩放，反之以框的高为标准缩放 
        if (maxWidth/ maxHeight  <= naturalWidth / naturalHeight){  //原图片宽高比例 大于 图片框宽高比例  
            width = maxWidth;   //以框的宽度为标准  
            height = maxWidth* (naturalHeight / naturalWidth);  
        }else {   //原图片宽高比例 小于 图片框宽高比例  
            width = maxHeight  * (naturalWidth / naturalHeight);  
            height = maxHeight  ;   //以框的高度为标准  
        }  
    } 
    this.setState({
        img: {
            src: src,
            width: width,
            height: height
        }
    })  

  }
  handleLoad(){      
      let imgReactNode = this.image;
      let { naturalWidth, naturalHeight} = imgReactNode;     
      this.imageResize(naturalWidth, naturalHeight)
  }
  render() {   
    return ( 
        <div 
            className="image-previewer-list-image"
            ref={(el)=> this.imageContainer = el} 
        >
            <div>               
                <img src={this.props.src} 
                     ref={(el)=> this.image = el}  
                     onLoad={this.handleLoad.bind(this)}
                     width={this.state.img.width} 
                     height={this.state.img.height}
                />
            </div>
        </div>  
    );
  }
}

export default Image