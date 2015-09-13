var PhotoBlock = React.createClass({
  getInitialState: function() {
    this.loadPhotoFromFlickr(1, 30, function(res) {
      if (res.stat.toUpperCase() == 'OK') {
        this.setState({
          flickr: {
            state: 'success',
            page: res.photos.page,
            totalPages: res.photos.pages,
            perPage: res.photos.perpage,
            total: res.photos.total,
            photo: res.photos.photo
          }
        })
      } else {
        this.setState({
          flickr: {
            state: 'fail to load photo from flickr'
          }
        })
      }
    }.bind(this))
    return null;
  },
  render: function() {
    if(!this.state)
      return null
      console.log(this.state.flickr);
    return (<div>state IS NOT NULL</div>)
  },
  loadPhotoFromFlickr: function(page, perPage, callback) {
    /**
     * flickr的Api是使用JSONP的形式
     * API的回傳會是一段Script，內容為
     * 呼叫名為jsonFlickrApi的函數
     * 並包含一個參數，此參數內為API包含Resopnsn內容的object
     *
     * jsonFlickrApi這個函數必須存在於window的scope下
     * 故利用window['jsonFlickrApi']的方式來定義這個callback
     */
    window['jsonFlickrApi'] = function(res) {
      callback(res);
      delete window['jsonFlickrApi'];
    }

    $.ajax({
      url: 'https://api.flickr.com/services/rest/',
      type: 'GET',
      dataType: 'script',
      data: {
        api_key: '33a74e2ef329312f75524921103e1523',
        format: 'json',
        method: 'flickr.groups.pools.getPhotos',
        group_id: '2828579@N25',
        per_page: perPage,
        page: page
      },
    });
  }
});


module.exports = PhotoBlock;
