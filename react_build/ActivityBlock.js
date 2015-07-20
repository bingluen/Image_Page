/*
  載入config
 */
var config = require('../config.json');

var ActivityListSwiper;
var NodePhotosSwiper;

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
      return React.createElement(ActivityNode, {key: index, title: currentNode.title, photos: currentNode.photos, contents: currentNode.contents, index: index})
    });
    return (
      React.createElement("div", {className: "ActivityList swiper-container"}, 
        React.createElement("div", {className: "swiper-wrapper"}, 
          ActivityNodes
        ), 
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
    var ActivityListSwiper = new Swiper('.ActivityList', {
        nextButton: '.ActivityList-swiper-button-next',
        prevButton: '.ActivityList-swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        paginationClickable: true,
        loop: 'true'
    });
    var NodePhotosSwiper = new Swiper('.NodePhotoList', {
        pagination: '.NodePhotoList-pagination',
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: 2500
    });
  }
});





var ActivityNode = React.createClass({displayName: "ActivityNode",
  render: function() {
    return (
      React.createElement("div", {className: "swiper-slide"}, 
        React.createElement("div", {className: "ActivityNodeContainer"}, 
          React.createElement("div", {className: "ui grid stackable"}, 
            React.createElement("div", {className: "eight wide column"}, 
              React.createElement(NodePhotoList, {photos: this.props.photos, index: this.props.index})
            ), 
            React.createElement("div", {className: "six wide column"}, this.props.title)
          )
        )
      )
    );
  }
});




var NodePhotoList = React.createClass({displayName: "NodePhotoList",
  render: function() {
    var PhotoElements = this.props.photos.map(function(currentPhoto, index){
      return React.createElement(PhotoElement, {url: currentPhoto, key: index})
    });
      
    console.log(this.props.photos);
    return (
      React.createElement("div", {className: "NodePhotoList swiper-container", "data-index": this.props.index}, 
        React.createElement("div", {className: "swiper-wrapper"}, 
          PhotoElements
        ), 
        /* pagination */
        React.createElement("div", {className: "swiper-pagination NodePhotoList-pagination", "data-index": this.props.index})

      )
    );
  },
  componentDidUpdate: function(prevProps, prevState) {
    

  }
});

var PhotoElement = React.createClass({displayName: "PhotoElement",
  render: function() {
    return (
      React.createElement("div", {className: "swiper-slide"}, 
        React.createElement("img", {src: this.props.url, className: "photoElement ui big rounded image"})
      )
    );
  }
});

module.exports = ActivityBlock;
