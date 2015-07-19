/*
  載入config
 */
var config = require('./config.json');

var ActivityListSwiper;

var ActivityBlock = React.createClass({
  render: function() {
    return (
      <section className="block" id="ActivityBlock">
        <ActivityList />
      </section>
    );
  }
});

var ActivityList = React.createClass({
  render: function() {
    var ActivityNodes = this.state.data.map(function(currentNode, index) {
      return <ActivityNode key={index} title={currentNode.title} photos={currentNode.photos} contents={currentNode.contents} />
    });
    return (
      <div className="ActivityList swiper-container">
        <div className="swiper-wrapper">
          {ActivityNodes}
        </div>
        {/* pagination */}
        <div className="swiper-pagination ActivityList-pagination"></div>

        {/* navigation buttons */}
        <div className="swiper-button-prev ActivityList-swiper-button-prev"></div>
        <div className="swiper-button-next ActivityList-swiper-button-next"></div>
      </div>
    );
  },
  getInitialState: function() {
    return ({
      data: []
    });
  },
  loadActivityFromServer: function() {
    $.ajax({
      url: 'http://' + config.back_end_server + '/' + config.api_root_path + '/' + config.app_path.activity,
      dataType: 'json',
      method: 'get',
      success: function(response) {
        this.setState({data :response.data});
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.loadActivityFromServer();
  },
  componentDidUpdate: function(prevProps, prevState) {
    ActivityListSwiper = new Swiper('.ActivityList', {
        pagination: '.ActivityList-pagination',
        paginationClickable: '.ActivityList-pagination',
        nextButton: '.ActivityList-swiper-button-next',
        prevButton: '.ActivityList-swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        loop: 'true'
    });
  },
});

var ActivityNode = React.createClass({
  render: function() {
    return (
      <div className="swiper-slide">
        {this.props.title}
      </div>
    );
  }
});

module.exports = ActivityBlock;
