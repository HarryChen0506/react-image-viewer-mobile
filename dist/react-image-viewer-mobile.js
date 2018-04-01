(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["react-image-viewer-mobile"] = factory(require("react"), require("react-dom"));
	else
		root["react-image-viewer-mobile"] = factory(root["React"], root["ReactDom"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ViewerContainer = __webpack_require__(9);

var _ViewerContainer2 = _interopRequireDefault(_ViewerContainer);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // image-previewer 入口

var ImagePreviewer = function (_React$Component) {
  _inherits(ImagePreviewer, _React$Component);

  function ImagePreviewer() {
    var _ref;

    _classCallCheck(this, ImagePreviewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ImagePreviewer.__proto__ || Object.getPrototypeOf(ImagePreviewer)).call.apply(_ref, [this].concat(args)));

    _this.async = _this.props.async;
    // console.log('async', this.async);
    _this.div = document.createElement('div');
    _this.imageNodeList = [];
    _this.state = {
      showViewer: false,
      curImageIndex: 0,
      imageList: []
    };
    return _this;
  }

  _createClass(ImagePreviewer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // console.log('viewer组件挂载了');
      if (!this.async) {
        //如果同步则挂载执行
        this.init();
      }
      document.body.appendChild(this.div);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // console.log('unmount')
      this.unbindImages();
    }
  }, {
    key: 'init',
    value: function init() {
      this.bindImages();
      this.getImageList();
    }
  }, {
    key: 'getImageList',
    value: function getImageList() {
      var imageNodeList = this.getChildrenImages();
      var imageList = [].map.call(imageNodeList, function (v, i) {
        return {
          src: v.src,
          title: v.title
        };
      });
      // console.log('imageList', imageList)
      this.setState({
        imageList: imageList
      });
    }
  }, {
    key: 'bindImages',
    value: function bindImages() {
      var _this2 = this;

      //给每张图片绑定事件
      this.imageNodeList = this.getChildrenImages();
      this.imageNodeList.forEach(function (v, i) {
        _this2.bindEvent(v, 'click', _this2.clickImageListener.call(_this2, i));
      });
    }
  }, {
    key: 'unbindImages',
    value: function unbindImages() {
      var _this3 = this;

      //解绑
      this.imageNodeList.forEach(function (v, i) {
        _this3.unbindEnent(v, 'click', _this3.clickImageListener.call(_this3, i));
      });
    }
  }, {
    key: 'clickImageListener',
    value: function clickImageListener(index) {
      var _this4 = this;

      return function () {
        _this4.handleClickImage(index);
      };
    }
  }, {
    key: 'getChildrenImages',
    value: function getChildrenImages() {
      var node = _reactDom2.default.findDOMNode(this.el);
      var images = node.querySelectorAll('img');
      // console.log('images', images)  
      return images;
    }
  }, {
    key: 'bindEvent',
    value: function bindEvent(node, eventType, listener) {
      node.addEventListener(eventType, listener, false);
    }
  }, {
    key: 'unbindEnent',
    value: function unbindEnent(node, eventType, listener) {
      node.removeEventListener(eventType, listener);
    }
  }, {
    key: 'showViewer',
    value: function showViewer() {
      //显示viewer组件
      this.setState({
        showViewer: true
      });
    }
  }, {
    key: 'closeViewer',
    value: function closeViewer() {
      //隐藏viewer组件
      this.setState({
        showViewer: false
      });
    }
  }, {
    key: 'handleClickImage',
    value: function handleClickImage(imageIndex) {
      //点击图片后的回调
      this.setState({
        curImageIndex: imageIndex
      });
      this.showViewer();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      //  console.log('viewer组件接受props');
      if (this.async) {
        //如果异步则更新执行
        this.init();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { ref: function ref(el) {
            return _this5.el = el;
          } },
        this.props.children,
        _reactDom2.default.createPortal(_react2.default.createElement(_ViewerContainer2.default, _extends({
          show: this.state.showViewer,
          onClose: function onClose() {
            return _this5.closeViewer();
          },
          imageList: this.state.imageList,
          curImageIndex: this.state.curImageIndex
        }, this.props)), this.div)
      );
    }
  }]);

  return ImagePreviewer;
}(_react2.default.Component);

ImagePreviewer.propTypes = {
  async: _propTypes2.default.bool.isRequired, // 内容是否异步，必须
  imageWrapperHeight: _propTypes2.default.number,
  opacity: _propTypes2.default.number,
  zIndex: _propTypes2.default.number,
  gap: _propTypes2.default.number
};
ImagePreviewer.defaultProps = {
  async: true,
  imageWrapperHeight: 300,
  opacity: 1,
  zIndex: 1000,
  gap: 10
};

var _default = ImagePreviewer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ImagePreviewer, 'ImagePreviewer', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/index.js');
}();

;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5)();
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var ReactPropTypesSecret = __webpack_require__(8);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ImageContainer = __webpack_require__(10);

var _ImageContainer2 = _interopRequireDefault(_ImageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // viewerContainer viewer容器

var screenWidth = typeof document !== 'undefined' && document.documentElement.clientWidth;
var screenHeight = typeof document !== 'undefined' && document.documentElement.clientHeight;

var viewerContainer = function (_React$Component) {
  _inherits(viewerContainer, _React$Component);

  function viewerContainer() {
    var _ref;

    _classCallCheck(this, viewerContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = viewerContainer.__proto__ || Object.getPrototypeOf(viewerContainer)).call.apply(_ref, [this].concat(args)));

    _this.imageContainerSize = {
      width: screenWidth, //图片容器宽度
      height: _this.props.imageWrapperHeight
    };
    return _this;
  }

  _createClass(viewerContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {}
  }, {
    key: 'handleClose',
    value: function handleClose() {
      this.props.onClose();
    }
  }, {
    key: 'getContainerStyle',
    value: function getContainerStyle() {
      var style = {};
      var _props = this.props,
          opacity = _props.opacity,
          zIndex = _props.zIndex;

      style.background = 'rgba(0,0,0,' + opacity + ')';
      style.zIndex = zIndex;
      return style;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var show = this.props.show;

      if (!show) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        {
          style: this.getContainerStyle(),
          className: 'image-previewer-container',
          onClick: function onClick() {
            return _this2.handleClose();
          } },
        _react2.default.createElement(_ImageContainer2.default, _extends({
          onClick: function onClick() {
            return _this2.handleClose();
          }
        }, this.props, {
          imageContainerSize: this.imageContainerSize,
          imageList: this.props.imageList,
          curImageIndex: this.props.curImageIndex
        }))
      );
    }
  }]);

  return viewerContainer;
}(_react2.default.Component);

var _default = viewerContainer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(screenWidth, 'screenWidth', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ViewerContainer/index.js');

  __REACT_HOT_LOADER__.register(screenHeight, 'screenHeight', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ViewerContainer/index.js');

  __REACT_HOT_LOADER__.register(viewerContainer, 'viewerContainer', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ViewerContainer/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ViewerContainer/index.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Image = __webpack_require__(11);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //图片容器组件


var POSITION_X = 'pageX'; //默认位置坐标 page
var POSITION_Y = 'pageY';

var ImageContainer = function (_React$Component) {
    _inherits(ImageContainer, _React$Component);

    function ImageContainer() {
        var _ref;

        _classCallCheck(this, ImageContainer);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = ImageContainer.__proto__ || Object.getPrototypeOf(ImageContainer)).call.apply(_ref, [this].concat(args)));

        _this.gesture = {
            isMoving: false, //是否移动中
            curposition: { x: 0, y: 0 }, //当前触点位置
            startPosition: { x: 0, y: 0 }, //初始位置
            endPosition: { x: 0, y: 0 }, //结束位置
            move: { x: 0, y: 0 //移动参数
            } };
        _this.state = {
            offLeft: 0,
            curImageIndex: _this.props.curImageIndex || 0
        };
        return _this;
    }

    _createClass(ImageContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.changeImageIndex();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var curImageIndex = nextProps.curImageIndex;

            if (curImageIndex !== this.state.curImageIndex) {
                this.setState({
                    curImageIndex: nextProps.curImageIndex
                });
            }
        }
    }, {
        key: 'calGestureMoveDistance',
        value: function calGestureMoveDistance() {
            //计算手势的移动距离
            var move_x = this.gesture.endPosition.x - this.gesture.startPosition.x;
            var move_y = this.gesture.endPosition.y - this.gesture.startPosition.y;
            return {
                x: move_x, //大于0 表示向右移动
                y: move_y //大于0 表示向下移动           
            };
        }
    }, {
        key: 'calGestureResult',
        value: function calGestureResult(_ref2) {
            var args = _objectWithoutProperties(_ref2, []);

            //计算手势移动后的效果 向左+1 向右-1
            var gesture = args.gesture,
                imageContainerSize = args.imageContainerSize;

            var WIDTH_RATIO = 0.2; //宽度参考比例 大于0.3*width 则移动 否则不变
            var result = {
                index_x: 0,
                index_y: 0
            };
            if (gesture.move.x > 0) {
                if (gesture.move.x > imageContainerSize.width * WIDTH_RATIO) {
                    result.index_x = -1;
                }
            } else {
                if (gesture.move.x < -imageContainerSize.width * WIDTH_RATIO) {
                    result.index_x = 1;
                }
            }
            return result;
        }
    }, {
        key: 'calImageIndex',
        value: function calImageIndex(_ref3) {
            var args = _objectWithoutProperties(_ref3, []);

            //计算图片下标
            var curImageIndex = args.curImageIndex,
                gesture = args.gesture,
                imageContainerSize = args.imageContainerSize;
            // console.log(curImageIndex, gesture,  imageContainerSize)

            var index = this.calGestureResult({ gesture: gesture, imageContainerSize: imageContainerSize });
            // console.log('index', index)
            return curImageIndex + index.index_x;
        }
    }, {
        key: 'changeImageIndex',
        value: function changeImageIndex() {
            var _this2 = this;

            //根据手势操作来响应改变图片下标      
            var changedImageIndex = this.calImageIndex({
                curImageIndex: this.state.curImageIndex,
                gesture: this.gesture,
                imageContainerSize: this.props.imageContainerSize
            });
            var imageLength = this.props.imageList.length;
            if (changedImageIndex < 0) {
                changedImageIndex = 0;
            } else if (changedImageIndex >= imageLength - 1) {
                changedImageIndex = imageLength - 1;
            }
            this.setState({
                curImageIndex: changedImageIndex
            }, function () {
                _this2.gesture.move = { x: 0, y: 0 //重新置于空
                };
            });
        }
    }, {
        key: 'changeOffLeft',
        value: function changeOffLeft() {
            //计算offsetLeft
            var nDiffx = this.gesture.move.x;
            this.setState({
                offLeft: nDiffx
            });
        }
    }, {
        key: 'calMoveLeft',
        value: function calMoveLeft() {
            //计算样式的left位置
            var width = this.props.imageContainerSize.width;
            var curImageIndex = this.state.curImageIndex;

            var left = -width * curImageIndex;
            if (!this.gesture.isMoving) {
                return left;
            }
            return left + this.state.offLeft;
        }
    }, {
        key: 'getContainerStyle',
        value: function getContainerStyle() {
            //获取容器的样式
            var defaultStyle = {};
            var length = this.props.imageList.length || 1;
            var imageContainerSize = this.props.imageContainerSize;

            var duration = 500 + 'ms';
            var left = this.calMoveLeft();
            var translate = 'translate3d(' + left + 'px, 0, 0)';

            defaultStyle.width = imageContainerSize.width * length + 100;
            defaultStyle.height = imageContainerSize.height;

            defaultStyle.WebkitTransitionDuration = duration;
            defaultStyle.transitionDuration = duration;
            defaultStyle.WebkitTransform = translate;
            defaultStyle.transform = translate;

            return defaultStyle;
        }
    }, {
        key: 'onTouchStart',
        value: function onTouchStart() {
            this.gesture.isMoving = true;
            // console.log('start', gesture)
        }
    }, {
        key: 'onTouchMove',
        value: function onTouchMove() {
            //  console.log('move', gesture)
            this.gesture.isMoving = true;
            this.changeOffLeft(this.gesture);
        }
    }, {
        key: 'onTouchEnd',
        value: function onTouchEnd() {
            //  console.log('end', gesture)
            this.gesture.isMoving = false;
            this.changeImageIndex();
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart(e) {
            e.preventDefault(); //阻止默认事件
            var x = e.targetTouches[0][POSITION_X];
            var y = e.targetTouches[0][POSITION_Y];
            this.gesture.curposition = { x: x, y: y };
            this.gesture.startPosition = { x: x, y: y };
            this.gesture.endPosition = { x: x, y: y };
            this.gesture.move = this.calGestureMoveDistance();
            this.onTouchStart();
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(e) {
            e.preventDefault(); //阻止默认事件
            var x = e.targetTouches[0][POSITION_X];
            var y = e.targetTouches[0][POSITION_Y];
            this.gesture.curposition = { x: x, y: y };
            this.gesture.endPosition = { x: x, y: y };
            this.gesture.move = this.calGestureMoveDistance();
            this.onTouchMove();
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(e) {
            // e.preventDefault();  //阻止默认事件
            this.onTouchEnd();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                imageContainerSize = _props.imageContainerSize,
                gap = _props.gap;

            var containerStyle = this.getContainerStyle();
            // console.log('render-left', left)
            return _react2.default.createElement(
                'div',
                {
                    className: 'image-previewer-list-wrap',
                    style: { width: imageContainerSize.width + 'px', height: imageContainerSize.height + 'px' },
                    ref: function ref(el) {
                        return _this3.container = el;
                    },
                    onTouchStart: this.handleTouchStart.bind(this),
                    onTouchMove: this.handleTouchMove.bind(this),
                    onTouchEnd: this.handleTouchEnd.bind(this),
                    onClick: this.props.onClick.bind(this)
                },
                _react2.default.createElement(
                    'div',
                    { className: 'image-previewer-list-index' },
                    _react2.default.createElement(
                        'span',
                        null,
                        this.state.curImageIndex + 1,
                        '/',
                        this.props.imageList.length
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    {
                        style: containerStyle
                    },
                    this.props.imageList.map(function (v, i) {
                        return _react2.default.createElement(
                            'li',
                            {
                                className: 'image-previewer-list-box',
                                key: v.src + '_' + i,
                                style: { width: imageContainerSize.width + 'px',
                                    height: imageContainerSize.height + 'px',
                                    padding: '0 ' + gap + 'px'
                                }
                            },
                            v.src ? _react2.default.createElement(_Image2.default, { src: v.src, width: v.width, height: v.height }) : _react2.default.createElement(
                                'span',
                                null,
                                'loading'
                            )
                        );
                    })
                )
            );
        }
    }]);

    return ImageContainer;
}(_react2.default.Component);

var _default = ImageContainer;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(POSITION_X, 'POSITION_X', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ImageContainer/index.js');

    __REACT_HOT_LOADER__.register(POSITION_Y, 'POSITION_Y', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ImageContainer/index.js');

    __REACT_HOT_LOADER__.register(ImageContainer, 'ImageContainer', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ImageContainer/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/ImageContainer/index.js');
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //图片组件


var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image() {
        var _ref;

        _classCallCheck(this, Image);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        // console.log('this.props', this.props, 12)
        var _this = _possibleConstructorReturn(this, (_ref = Image.__proto__ || Object.getPrototypeOf(Image)).call.apply(_ref, [this].concat(args)));

        _this.state = {
            img: {
                src: '',
                width: 0,
                height: 0
            }
        };
        return _this;
    }

    _createClass(Image, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //  this.imageResize()     
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            //  console.log(' this.nextProps', nextProps)
            //  this.imageResize() 
        }
    }, {
        key: 'calContainerSize',
        value: function calContainerSize() {
            //计算容器尺寸
            var node_container = _reactDom2.default.findDOMNode(this.imageContainer);
            return node_container.getBoundingClientRect();
        }
    }, {
        key: 'imageResize',
        value: function imageResize(naturalWidth, naturalHeight) {
            //图片自适应
            var size = this.calContainerSize();
            //   console.log('imageContainer', size)
            this.maxWidth = size.width; //容器的宽度最大值
            this.maxHeight = size.height; //容器的高度最大值   
            this.autoSize(naturalWidth, naturalHeight);
        }
    }, {
        key: 'autoSize',
        value: function autoSize() {
            var naturalWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var naturalHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;


            var src = this.props.src;
            var maxWidth = this.maxWidth;
            var maxHeight = this.maxHeight;

            var width = 0;
            var height = 0;

            // // 当图片比图片框小时不做任何改变   
            if (naturalWidth < maxWidth && naturalHeight < maxHeight) {
                width = naturalWidth;
                height = naturalHeight;
            } else {
                //原图片宽高比例 大于 图片框宽高比例,则以框的宽为标准缩放，反之以框的高为标准缩放 
                if (maxWidth / maxHeight <= naturalWidth / naturalHeight) {
                    //原图片宽高比例 大于 图片框宽高比例  
                    width = maxWidth; //以框的宽度为标准  
                    height = maxWidth * (naturalHeight / naturalWidth);
                } else {
                    //原图片宽高比例 小于 图片框宽高比例  
                    width = maxHeight * (naturalWidth / naturalHeight);
                    height = maxHeight; //以框的高度为标准  
                }
            }
            this.setState({
                img: {
                    src: src,
                    width: width,
                    height: height
                }
            });
        }
    }, {
        key: 'handleLoad',
        value: function handleLoad() {
            var imgReactNode = this.image;
            var naturalWidth = imgReactNode.naturalWidth,
                naturalHeight = imgReactNode.naturalHeight;

            this.imageResize(naturalWidth, naturalHeight);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                {
                    className: 'image-previewer-list-image',
                    ref: function ref(el) {
                        return _this2.imageContainer = el;
                    }
                },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('img', { src: this.props.src,
                        ref: function ref(el) {
                            return _this2.image = el;
                        },
                        onLoad: this.handleLoad.bind(this),
                        width: this.state.img.width,
                        height: this.state.img.height
                    })
                )
            );
        }
    }]);

    return Image;
}(_react2.default.Component);

var _default = Image;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Image, 'Image', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/Image/index.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'E:/newStudy/react/project/react-image-viewer-mobile/src/lib/Image/index.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(15)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../node_modules/_postcss-loader@2.1.3@postcss-loader/lib/index.js!./previewer.css", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.11@css-loader/index.js!../../node_modules/_postcss-loader@2.1.3@postcss-loader/lib/index.js!./previewer.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".image-previewer-container {\r\n    position: fixed;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    right: 0px;    \r\n    color: #fff;    \r\n    display: -webkit-box;    \r\n    display: -ms-flexbox;    \r\n    display: flex;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n}\r\n\r\n.image-previewer-list-wrap {  \r\n   position: relative;   \r\n}\r\n.image-previewer-list-index {\r\n    position: absolute;\r\n    top: -40px;\r\n    right: 40px;\r\n}\r\n.image-previewer-list-wrap ul {  \r\n    overflow: hidden;  \r\n    list-style: none;\r\n    padding: 0;\r\n    margin:0;\r\n    position: absolute;\r\n    left:0;\r\n}\r\n.image-previewer-list-wrap li {\r\n    list-style: none;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;   \r\n    /*background: yellow;*/\r\n}\r\n.image-previewer-list-box {\r\n    float: left;   \r\n}\r\n.image-previewer-list-box img {\r\n    /*width: 100%;*/\r\n}\r\n.image-previewer-list-image {\r\n    width:100%;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align:center;\r\n        -ms-flex-align:center;\r\n            align-items:center;\r\n    -webkit-box-pack:center;\r\n        -ms-flex-pack:center;\r\n            justify-content:center;\r\n}", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ])["default"];
});