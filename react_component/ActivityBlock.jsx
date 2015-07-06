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
    getInitialState: function() {
//初始化
        var testData = require('../testData.json');
        return {
            data: testData.Activity
        };
    },
    render: function() {
        var ActivityData = this.state.data.map(function(activity, index, array) {
          var active = (index == 0) ? 'active' : '';
            return (
                <ActivityNode className={active} contents={activity.contents} photos={activity.photos} title={activity.title}/>
            )
        })
        var indicators = this.state.data.map(function(activity, index) {
            if (index) {
                return (
                    <li data-slide-to={index} data-target="#carousel-activity"></li>
                )
            } else {
                return (
                    <li className="active" data-slide-to={index} data-target="#carousel-activity"></li>
                )
            }
        });
        return (
            <div className="carousel slide" data-ride="carousel" id="carousel-activity">
                <ol className="carousel-indicators">
                  {indicators}
                </ol>
                <div className="carousel-inner" role="listbox">
                    {ActivityData}
                </div>
                <a className="left carousel-control" data-slide="prev" href="#carousel-activity" role="button">
                    <span aria-hidden="true" className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" data-slide="next" href="#carousel-activity" role="button">
                    <span aria-hidden="true" className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
});

var ActivityNode = React.createClass({
    render: function() {
        return (
            <div className={this.props.className + " item slide"}>
              <div className="container">
                <h3>
                    {this.props.title}
                </h3>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-responsive img-rounded" src={this.props.photos[0]} />
                    </div>
                    <div className="col-md-6">
                        {this.props.contents}
                    </div>
                </div>
              </div>
            </div>
        );
    }
});

module.exports = ActivityBlock;
