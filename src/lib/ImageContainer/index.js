//图片容器组件
import React from 'react';
import ReactDOM from 'react-dom';
import Image from '../Image';

const POSITION_X = 'pageX';  //默认位置坐标 page
const POSITION_Y = 'pageY';

class ImageContainer extends React.Component {
    constructor(...args){
        super(...args);
        this.gesture = {
            isMoving:false, //是否移动中
            curposition: {x:0,y:0},   //当前触点位置
            startPosition: {x:0,y:0}, //初始位置
            endPosition: {x:0,y:0},   //结束位置
            move: {x:0,y:0}        //移动参数
        }           
        this.state = {        
            offLeft: 0,
            curImageIndex:this.props.curImageIndex||0
        } 
    }
    componentDidMount(){   
        this.changeImageIndex();
    }  
    componentWillReceiveProps(nextProps){  
      let { curImageIndex } = nextProps; 
      if(curImageIndex!==this.state.curImageIndex){
          this.setState({
          curImageIndex: nextProps.curImageIndex
        })
      }
    } 
    calGestureMoveDistance(){ //计算手势的移动距离
        const move_x = this.gesture.endPosition.x - this.gesture.startPosition.x;
        const move_y = this.gesture.endPosition.y - this.gesture.startPosition.y;
        return {           
            x: move_x,  //大于0 表示向右移动
            y: move_y   //大于0 表示向下移动           
        }       
    }  
    calGestureResult({...args}){  //计算手势移动后的效果 向左+1 向右-1
        const { gesture, imageContainerSize} = args;       
        const WIDTH_RATIO = 0.2;  //宽度参考比例 大于0.3*width 则移动 否则不变
        let result = {
            index_x:0,
            index_y:0
        }
        if(gesture.move.x>0){
            if(gesture.move.x>imageContainerSize.width*WIDTH_RATIO ){
                result.index_x = -1;
            }
        }else{
            if(gesture.move.x<-imageContainerSize.width*WIDTH_RATIO ){
                result.index_x = 1;
            }
        }
        return result
    }
    calImageIndex({...args}){  //计算图片下标
        const { curImageIndex, gesture, imageContainerSize} = args;
        // console.log(curImageIndex, gesture,  imageContainerSize)
        let index = this.calGestureResult({gesture, imageContainerSize})
        // console.log('index', index)
        return curImageIndex + index.index_x;
    }
    changeImageIndex(){   //根据手势操作来响应改变图片下标      
        let changedImageIndex = this.calImageIndex({
            curImageIndex: this.state.curImageIndex,
            gesture: this.gesture,
            imageContainerSize:this.props.imageContainerSize
        })
        let imageLength  = this.props.imageList.length;
        if(changedImageIndex < 0){
            changedImageIndex = 0
        }else if(changedImageIndex >= (imageLength-1)){
            changedImageIndex = (imageLength-1)
        }
        this.setState({
            curImageIndex: changedImageIndex
        },()=>{
            this.gesture.move = {x:0,y:0}  //重新置于空
        })      
    }
    changeOffLeft(){  //计算offsetLeft
        let nDiffx = this.gesture.move.x;       
        this.setState({
            offLeft: nDiffx,
        });
    }        
    calMoveLeft(){   //计算样式的left位置
        let { width } = this.props.imageContainerSize; 
        let { curImageIndex } = this.state; 
        let left = -width*curImageIndex; 
        if(!this.gesture.isMoving){
            return left
        }
        return left+this.state.offLeft
    }
    getContainerStyle(){  //获取容器的样式
        const defaultStyle = {};    
        const length = this.props.imageList.length||1
        const { imageContainerSize } = this.props;
        const duration = `${500}ms`;
        const left  = this.calMoveLeft();
        const translate = `translate3d(${left}px, 0, 0)`;
        
        defaultStyle.width = imageContainerSize.width*length+100
        defaultStyle.height = imageContainerSize.height;
      
        defaultStyle.WebkitTransitionDuration = duration;
        defaultStyle.transitionDuration = duration; 
        defaultStyle.WebkitTransform = translate;
        defaultStyle.transform = translate;      
       
        return defaultStyle
    }
    onTouchStart(){
        this.gesture.isMoving = true;
        // console.log('start', gesture)
    }
    onTouchMove(){
        //  console.log('move', gesture)
        this.gesture.isMoving = true;
        this.changeOffLeft(this.gesture)
    }
    onTouchEnd(){
        //  console.log('end', gesture)
            this.gesture.isMoving = false;
            this.changeImageIndex();
    }
    handleTouchStart(e){
        e.preventDefault();  //阻止默认事件
        let x = e.targetTouches[0][POSITION_X];
        let y = e.targetTouches[0][POSITION_Y];      
        this.gesture.curposition = {x,y};
        this.gesture.startPosition = {x,y};
        this.gesture.endPosition = {x,y};
        this.gesture.move = this.calGestureMoveDistance();
        this.onTouchStart( ) 
    }
    handleTouchMove(e){
        e.preventDefault();  //阻止默认事件
        let x = e.targetTouches[0][POSITION_X];
        let y = e.targetTouches[0][POSITION_Y];   
        this.gesture.curposition = {x,y};
        this.gesture.endPosition = {x,y};
        this.gesture.move = this.calGestureMoveDistance()
        this.onTouchMove( ) 
    }
    handleTouchEnd(e){
        // e.preventDefault();  //阻止默认事件
        this.onTouchEnd( )
    }  
    render() {
        const { imageContainerSize, gap } = this.props;
        const containerStyle = this.getContainerStyle();        
        // console.log('render-left', left)
        return (          
            
            <div 
                className="image-previewer-list-wrap"
                style={{width: imageContainerSize.width+'px', height:imageContainerSize.height+'px'}}
                ref={(el)=> this.container = el}  
                onTouchStart = {this.handleTouchStart.bind(this)}
                onTouchMove = {this.handleTouchMove.bind(this)}
                onTouchEnd = {this.handleTouchEnd.bind(this)}
                onClick = {this.props.onClick.bind(this)}     
            >   
                {/*<div style={{position: 'absolute',zIndex:1,display:'none'}}>
                    <p>图片：下标{this.state.curImageIndex}</p>    
                    <p>移动：{this.state.offLeft}</p>
                    <p>move：{this.gesture.move.x}</p> 
                </div>*/}
                <div className="image-previewer-list-index">
                    <span>{this.state.curImageIndex+1}/{this.props.imageList.length}</span>
                </div> 
                <ul                 
                    style={containerStyle}
                >
                    {this.props.imageList.map((v,i)=>{
                        return (
                            <li 
                                className="image-previewer-list-box"
                                key={v.src+'_'+i}
                                style={{width: imageContainerSize.width+'px',  
                                        height:imageContainerSize.height+'px',
                                        padding: `0 ${gap}px`
                                       }}
                            >                            
                                {v.src?<Image src={v.src} />:(<span>loading</span>)}
                            </li>                        
                        )
                    })}
                </ul>            
            </div>                 
            
        );
    }
}

export default ImageContainer