(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "back_end_server": "127.0.0.1:62429",
  "api_root_path": "data",
  "app_path": {
    "activity": "activity.json"
  }
}
},{}],2:[function(require,module,exports){
/*
  載入config
 */
var config = require('../config.json');

var ActivityListSwiper;
var NodePhotosSwiper;

var ActivityBlock = React.createClass({displayName: "ActivityBlock",
  render: function() {
    return (
      React.createElement("section", {className: "block", id: "ActivityBlock"}, 
        React.createElement(ActivityList, null)
      )
    );
  }
});


var ActivityList = React.createClass({displayName: "ActivityList",
  render: function() {
    var ActivityNodes = this.state.data.map(function(currentNode, index) {
      return React.createElement(ActivityNode, {key: index, title: currentNode.title, photos: currentNode.photos, contents: currentNode.contents, index: index})
    });
    return (
      React.createElement("div", {className: "ActivityList swiper-container"}, 
        React.createElement("div", {className: "swiper-wrapper"}, 
          ActivityNodes
        ), 
        /* navigation buttons */
        React.createElement("div", {className: "swiper-button-prev ActivityList-swiper-button-prev"}), 
        React.createElement("div", {className: "swiper-button-next ActivityList-swiper-button-next"})
      )
    );
  },
  getInitialState: function() {
    return ({
      data: []
    });
  },
  loadActivityFromServer: function() {
    $.ajax({
      url: 'http://' + config.back_end_server + '/' + config.api_root_path + '/' + config.app_path.activity,
      dataType: 'json',
      method: 'get',
      success: function(response) {
        this.setState({data :response.data});
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadActivityFromServer();
  },
  componentDidUpdate: function(prevProps, prevState) {
    var ActivityListSwiper = new Swiper('.ActivityList', {
        nextButton: '.ActivityList-swiper-button-next',
        prevButton: '.ActivityList-swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        paginationClickable: true,
        loop: 'true'
    });
    var NodePhotosSwiper = new Swiper('.NodePhotoList', {
        pagination: '.NodePhotoList-pagination',
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 2500
    });
  }
});





var ActivityNode = React.createClass({displayName: "ActivityNode",
  render: function() {
    return (
      React.createElement("div", {className: "swiper-slide"}, 
        React.createElement("div", {className: "ActivityNodeContainer"}, 
          React.createElement("div", {className: "ui grid stackable"}, 
            React.createElement("div", {className: "eight wide column"}, 
              React.createElement(NodePhotoList, {photos: this.props.photos, index: this.props.index})
            ), 
            React.createElement("div", {className: "six wide column"}, this.props.title)
          )
        )
      )
    );
  }
});




var NodePhotoList = React.createClass({displayName: "NodePhotoList",
  render: function() {
    var PhotoElements = this.props.photos.map(function(currentPhoto, index){
      return React.createElement(PhotoElement, {url: currentPhoto, key: index})
    });
      
    console.log(this.props.photos);
    return (
      React.createElement("div", {className: "NodePhotoList swiper-container", "data-index": this.props.index}, 
        React.createElement("div", {className: "swiper-wrapper"}, 
          PhotoElements
        ), 
        /* pagination */
        React.createElement("div", {className: "swiper-pagination NodePhotoList-pagination", "data-index": this.props.index})

      )
    );
  },
  componentDidUpdate: function(prevProps, prevState) {
    

  }
});

var PhotoElement = React.createClass({displayName: "PhotoElement",
  render: function() {
    return (
      React.createElement("div", {className: "swiper-slide"}, 
        React.createElement("img", {src: this.props.url, className: "photoElement ui big rounded image"})
      )
    );
  }
});

module.exports = ActivityBlock;

},{"../config.json":1}],3:[function(require,module,exports){
/*
MainBlock - by Erickson
"Key Vision"
*/
var MainBlock = React.createClass({displayName: "MainBlock",
    render: function() {
        return (
            React.createElement("section", {className: "block", id: "MainBlock"}, "ITAC")
        );
    }
});

//把模組匯出
module.exports = MainBlock;

},{}],4:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"dup":1}],5:[function(require,module,exports){
/*
  載入config
 */
var config = require('./config.json')


/*
  載入模組
 */
var MainBlock = require('./MainBlock');
//var IntroductionBlock = require('IntroductionBlock');
var ActivityBlock = require('./ActivityBlock');
//var ProjectBlock = require('ProjectBlock');



var MainContainer = React.createClass({displayName: "MainContainer",
    render: function() {
        return (
            React.createElement("div", {id: "reactRender"}, 
                React.createElement(MainBlock, null), 
                React.createElement(ActivityBlock, null)
            )
        );
    }
});

React.render(React.createElement(MainContainer, null), $('#Container')[0]);

},{"./ActivityBlock":2,"./MainBlock":3,"./config.json":4}]},{},[5]);
