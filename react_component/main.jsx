/*
  載入模組
 */
var MainBlock = require('./MainBlock');
//var IntroductionBlock = require('IntroductionBlock');
var ActivityBlock = require('./ActivityBlock');
//var ProjectBlock = require('ProjectBlock');

var MainContainer = React.createClass({
    render: function() {
        return (
            <div>
                <MainBlock />
                <ActivityBlock />
            </div>
        );
    }
});

React.render(<MainContainer />, $('#Container')[0]);
