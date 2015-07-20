/*
  載入config
 */
var config = require('../config.json');

var ActivityListSwiper;
var NodePhotosSwiper;

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
      return <ActivityNode key={index} title={currentNode.title} photos={currentNode.photos} contents={currentNode.contents} index={index} />
    });
    return (
      <div className="ActivityList swiper-container">
        <div className="swiper-wrapper">
          {ActivityNodes}
        </div>
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





var ActivityNode = React.createClass({
  render: function() {
    return (
      <div className="swiper-slide">
        <div className="ActivityNodeContainer">
          <div className="ui grid stackable">
            <div className="eight wide column">
              <NodePhotoList photos={this.props.photos} index={this.props.index}/>
            </div>
            <div className="six wide column">{this.props.title}</div>
          </div>
        </div>
      </div>
    );
  }
});




var NodePhotoList = React.createClass({
  render: function() {
    var PhotoElements = this.props.photos.map(function(currentPhoto, index){
      return <PhotoElement url={currentPhoto} key={index} />
    });
      
    console.log(this.props.photos);
    return (
      <div className="NodePhotoList swiper-container" data-index={this.props.index}>
        <div className="swiper-wrapper">
          {PhotoElements}
        </div>
        {/* pagination */}
        <div className="swiper-pagination NodePhotoList-pagination" data-index={this.props.index}></div>

      </div>
    );
  },
  componentDidUpdate: function(prevProps, prevState) {
    

  }
});

var PhotoElement = React.createClass({
  render: function() {
    return (
      <div className="swiper-slide">
        <img src={this.props.url} className="photoElement ui big rounded image" />
      </div>
    );
  }
});

module.exports = ActivityBlock;
