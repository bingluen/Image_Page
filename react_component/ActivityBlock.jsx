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
    console.log(this.props.index);
    return (
      <div className="NodePhotoList swiper-container" data-index={this.props.index}>
        <div className="swiper-wrapper">
          {PhotoElements}
        </div>
        {/* pagination */}
        <div className="swiper-pagination NodePhotoList-pagination" data-index={this.props.index}></div>

        {/* navigation buttons */}
        <div className="swiper-button-prev NodePhotoList-swiper-button-prev" data-index={this.props.index}></div>
        <div className="swiper-button-next NodePhotoList-swiper-button-next" data-index={this.props.index}></div>
      </div>
    );
  },
  componentDidUpdate: function(prevProps, prevState) {
    /*內層爛掉了只好自己來重刻 ＝＝
    NodePhotosSwiper = new Swiper('.NodePhotoList[data-index='+this.props.index+']', {
        pagination: '.NodePhotoList-pagination[data-index='+this.props.index+']',
        paginationClickable: '.NodePhotoList-pagination[data-index='+this.props.index+']',
        nextButton: '.NodePhotoList-swiper-button-next[data-index='+this.props.index+']',
        prevButton: '.NodePhotoList-swiper-button-prev[data-index='+this.props.index+']',
        spaceBetween: 30,
        effect: 'fade',
        centeredSlides: true,
        autoplay: 2500
    });*/

  }
});

var PhotoElement = React.createClass({
  render: function() {
    return (
      <div className="swiper-slide">
        {/* Required swiper-lazy class and image source specified in data-src attribute */}
        <img src={this.props.url} className="photoElement ui big rounded image" />
        {/* <!-- Preloader image -->*/}
        {/*<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>*/}
      </div>
    );
  }
});

module.exports = ActivityBlock;
