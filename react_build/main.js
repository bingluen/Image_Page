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
