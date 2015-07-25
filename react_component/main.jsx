
/*
  載入模組
*/
var MainBlock = require('./MainBlock');
var IntroductionBlock = require('./IntroductionBlock');
var ActivityBlock = require('./ActivityBlock');
var ProjectBlock = require('ProjectBlock');


var MainContainer = React.createClass({
    render: function() {
        return (
            <div id="reactRender">
              <MainBlock scrollIndex="0" />
              <IntroductionBlock scrollIndex="1" />
              <ActivityBlock scrollIndex="2" />
              <ProjectBlock scrollIndex="3" />
            </div>
        );
    }
});

React.render(<MainContainer />, $('#Container')[0]);
