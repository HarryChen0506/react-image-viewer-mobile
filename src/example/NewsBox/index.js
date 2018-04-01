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