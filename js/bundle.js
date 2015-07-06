(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
MainBlock - by Erickson
"Key Vision"
*/
var MainBlock = React.createClass({displayName: "MainBlock",
    render: function() {
        return (
            React.createElement("div", {className: "ui inverted vertical masthead center aligned segment", id: "MainBlock"}, 
                "test"
            )
        );
    }
});


module.exports = MainBlock;

},{}],2:[function(require,module,exports){
var MainBlock = require('./MainBlock');
//var IntroductionBlock = require('IntroductionBlock');
//var ActivityBlock = require('ActivityBlock');
//var ProjectBlock = require('ProjectBlock');

var MainContainer = React.createClass({displayName: "MainContainer",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement(MainBlock, null)
            )
        );
    }
});

React.render(React.createElement(MainContainer, null),
    $('#MainContainer')[0]
);

},{"./MainBlock":1}]},{},[2]);
