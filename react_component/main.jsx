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



var MainContainer = React.createClass({
    render: function() {
        return (
            <div id="reactRender">
                <MainBlock />
                <ActivityBlock />
            </div>
        );
    }
});

React.render(<MainContainer />, $('#Container')[0]);
