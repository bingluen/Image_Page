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
