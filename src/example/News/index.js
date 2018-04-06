//新闻组件 News
import React from 'react';
import NewsBox from '../NewsBox';
import ImagePreviewer from '../../lib/index.js'
// import ImagePreviewer from '../../../dist/react-image-viewer-mobile.js'
class News extends React.Component {  
  render() {    
    return (      
        <div>
          <ImagePreviewer 
            async={true}             /*图片内容是否异步*/
            imageWrapperHeight={300}  /*图片容器高度*/
            opacity={1}          /*背景透明度*/
            zIndex={1000}           /*图层层级*/
            gap={30}                 /*图片间隙*/
          >
            <NewsBox content={this.props.content}/>     
          </ImagePreviewer>             
        </div>      
    );
  }
}

export default News