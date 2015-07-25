(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MainBlock = React.createClass({displayName: "MainBlock",
  render: function() {
    return (
      React.createElement("section", {className: "block", id: "MainBlock", "data-scroll-index": this.props.scrollIndex}, 
        React.createElement("div", {className: "ui grid container"}, 
          React.createElement("div", {className: "twelve wide column"}, 
            /*
              <p> Device大小：{window.outerWidth} * {window.outerHeight} </p>
              <p> 視窗大小：{$(window).width()} * {$(window).height()}</p>
            */
            React.createElement("img", {className: "ui medium image", src: "img/ITAC-Logo.png"}), 
            React.createElement("img", {className: "logo-text ui image", src: "img/main/itac.png"})
          )
        ), 
        React.createElement("div", {className: "button"}, 
          React.createElement("a", {href: "#", "data-scroll-nav": parseInt(this.props.scrollIndex) + 1}, 
            React.createElement("i", {className: "chevron down icon"})
          )
        )
      )
    );
  }
});


module.exports = MainBlock;

},{}],2:[function(require,module,exports){

/*
  載入模組
*/
var MainBlock = require('./MainBlock');
/*
var IntroductionBlock = require('./IntroductionBlock');
var ActivityBlock = require('./ActivityBlock');
var ProjectBlock = require('ProjectBlock');
*/


var MainContainer = React.createClass({displayName: "MainContainer",
    render: function() {
        return (
            React.createElement("div", {id: "reactRender"}, 
              React.createElement(MainBlock, {scrollIndex: "0"})
            )
        );
    }
});

React.render(React.createElement(MainContainer, null), $('#Container')[0]);

},{"./MainBlock":1}]},{},[2]);
