# react-image-viewer-mobile

A ReactJS image Viewer Component for mobile
一款基于react的图片预览组件，特别适合于异步获取的富文本中的图片，点击图片即可全屏显示，并且带有轮播效果。

### demo
![image](https://github.com/HarryChen0506/react-image-viewer-mobile/blob/master/demo/image-viewer.gif)

### Install

```
npm install react-image-viewer-mobile --save
```

### Example
```javascript
'use strict';
import React from 'react';
import NewsBox from '../NewsBox';
import ImagePreviewer from 'react-image-viewer-mobile'
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
            gap={10}                 /*图片间隙*/
          >
            <NewsBox content={this.props.content}/>     /*异步获取的富文本*/ 
          </ImagePreviewer>             
        </div>      
    );
  }
}

export default News
```
```
//新闻内容组件 NewsBox
import React from 'react';
class NewsBox extends React.Component {  
  render() {
    return (      
        <div dangerouslySetInnerHTML={{__html: this.props.content}}>        
        </div>      
    );
  }
}

export default NewsBox
```

### Running demo locally

The demo can be launched on local machine via `webpack-dev-server`. Run the following:

```javascript
    webpack-dev-server --config webpack.dev.config.js --color --progress
```


### Props

| Property | Description | Type | default | Remarks |
| --- | --- | --- | --- | --- |
| async | is images async? | Boolean | false | 图片内容是否异步 |
| zIndex | the depth of the layer | Number | 1000 | 图层层级 |
| gap | the gap between images | Number | 10 | 图片间隙 |
| opacity | the backgroup modal's opacity | Number | 1 | 背景透明度 |
| imageWrapperHeight | the height of image wrapper | Number | 300 | 图片容器高度 |

### version
#### v1.1.0 
- fixbug 异步内容update导致的溢出
- 轮播组件更换成更加流畅的nuka-carousel
#### v1.1.1
- fixbug 组件componentWillUnmount时解绑报错

### Reference
- [react-wx-images-viewer](https://github.com/react-ld/react-wx-images-viewer)
- [nuka-carousel](https://github.com/FormidableLabs/nuka-carousel)