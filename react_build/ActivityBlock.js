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
                React.createElement(ActivityNode, {className: active, contents: activity.contents, photos: activity.photos, title: activity.title})
            )
        })
        var indicators = this.state.data.map(function(activity, index) {
            if (index) {
                return (
                    React.createElement("li", {"data-slide-to": index, "data-target": "#carousel-activity"})
                )
            } else {
                return (
                    React.createElement("li", {className: "active", "data-slide-to": index, "data-target": "#carousel-activity"})
                )
            }
        });
        return (
            React.createElement("div", {className: "carousel slide", "data-ride": "carousel", id: "carousel-activity"}, 
                React.createElement("ol", {className: "carousel-indicators"}, 
                  indicators
                ), 
                React.createElement("div", {className: "carousel-inner", role: "listbox"}, 
                    ActivityData
                ), 
                React.createElement("a", {className: "left carousel-control", "data-slide": "prev", href: "#carousel-activity", role: "button"}, 
                    React.createElement("span", {"aria-hidden": "true", className: "glyphicon glyphicon-chevron-left"}), 
                    React.createElement("span", {className: "sr-only"}, "Previous")
                ), 
                React.createElement("a", {className: "right carousel-control", "data-slide": "next", href: "#carousel-activity", role: "button"}, 
                    React.createElement("span", {"aria-hidden": "true", className: "glyphicon glyphicon-chevron-right"}), 
                    React.createElement("span", {className: "sr-only"}, "Next")
                )
            )
        );
    }
});

var ActivityNode = React.createClass({displayName: "ActivityNode",
    render: function() {
        return (
            React.createElement("div", {className: this.props.className + " item slide"}, 
              React.createElement("div", {className: "container"}, 
                React.createElement("h3", null, 
                    this.props.title
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement("div", {className: "col-md-6"}, 
                        React.createElement("img", {className: "img-responsive img-rounded", src: this.props.photos[0]})
                    ), 
                    React.createElement("div", {className: "col-md-6"}, 
                        this.props.contents
                    )
                )
              )
            )
        );
    }
});

module.exports = ActivityBlock;
