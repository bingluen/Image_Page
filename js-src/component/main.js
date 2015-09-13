var TitleBlock = require('./title.js');
var AboutBlock = require('./about.js');
var PhotoBlock = require('./photo.js');

module.exports = function () {
  React.render(React.createElement(MainContainer, null), document.getElementsByTagName('body')[0]);
}

var MainContainer = React.createClass({displayName: "MainContainer",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement(TitleBlock, null), 
        React.createElement(AboutBlock, null), 
        React.createElement(PhotoBlock, null)
      )
    )
  }
});
