(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "back_end_server": "127.0.0.1:8080",
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
      return React.createElement(ActivityNode, {key: index, title: currentNode.title, photos: currentNode.photos, contents: currentNode.contents})
    });
    return (
      React.createElement("div", {className: "ActivityList swiper-container"}, 
        React.createElement("div", {className: "swiper-wrapper"}, 
          ActivityNodes
        ), 
        /* pagination */
        React.createElement("div", {className: "swiper-pagination ActivityList-pagination"}), 

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
    ActivityListSwiper = new Swiper('.ActivityList', {
        pagination: '.ActivityList-pagination',
        paginationClickable: '.ActivityList-pagination',
        nextButton: '.ActivityList-swiper-button-next',
        prevButton: '.ActivityList-swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        loop: 'true'
    });
  },
});

var ActivityNode = React.createClass({displayName: "ActivityNode",
  render: function() {
    return (
      React.createElement("div", {className: "swiper-slide"}, 
        this.props.title
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

},{"./ActivityBlock":2,"./MainBlock":3}]},{},[4]);
