var TitleBlock = require('./title.js');
var AboutBlock = require('./about.js');
var PhotoBlock = require('./photo.js');

module.exports = function () {
  React.render(<MainContainer />, document.getElementsByTagName('body')[0]);
}

var MainContainer = React.createClass({
  render: function() {
    return(
      <div>
        <TitleBlock />
        <AboutBlock />
        <PhotoBlock />
      </div>
    )
  }
});
