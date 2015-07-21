/*
  載入config
 */
var config = require('../config.json')

var IntroductionBlock = React.createClass({
  render: function() {
    return (
      <section className="block" id="IntroductionBlock">
        <div className="ui container">
          <h1>
            About ITAC
          </h1>

        </div>
      </section>
    );
  }
});

module.exports = IntroductionBlock;
