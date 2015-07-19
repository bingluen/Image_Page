/*
  載入config
 */
var config = require('../config.json');

var ActivityListSwiper;

var ActivityBlock = React.createClass({displayName: "ActivityBlock",
  render: function() {
    return (
      React.createElement("section", {className: "block", id: "ActivityBlock"}, 
        React.createElement(ActivityList, null)
      )
    );
  }
});

var ActivityList = React.createClass({displayName: "ActivityList",
  render: function() {
    var ActivityNodes = this.state.data.map(function(currentNode, index) {
      return React.createElement(ActivityNode, {key: index, title: currentNode.title, photos: currentNode.photos, contents: currentNode.contents})
    });
    return (
      React.createElement("div", {className: "ActivityList swiper-container"}, 
        React.createElement("div", {className: "swiper-wrapper"}, 
          ActivityNodes
        ), 
        /* pagination */
        React.createElement("div", {className: "swiper-pagination ActivityList-pagination"}), 

        /* navigation buttons */
        React.createElement("div", {className: "swiper-button-prev ActivityList-swiper-button-prev"}), 
        React.createElement("div", {className: "swiper-button-next ActivityList-swiper-button-next"})
      )
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

var ActivityNode = React.createClass({displayName: "ActivityNode",
  render: function() {
    return (
      React.createElement("div", {className: "swiper-slide"}, 
        this.props.title
      )
    );
  }
});

module.exports = ActivityBlock;
