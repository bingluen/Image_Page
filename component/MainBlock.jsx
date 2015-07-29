var MainBlock = React.createClass({
  render: function() {
    return (
      <section className="block" id="MainBlock" data-scroll-index={this.props.scrollIndex}>
        <div className="ui grid container">
          <div className="twelve wide column">
            {/*
              <p> Device大小：{window.outerWidth} * {window.outerHeight} </p>
              <p> 視窗大小：{$(window).width()} * {$(window).height()}</p>
            */}
            <img className="ui medium image" src="img/ITAC-Logo.png" />
            <img className="logo-text ui image" src="img/main/itac.png" />
          </div>
        </div>
        <ButtonDown index={this.props.scrollIndex + 1}/>
      </section>
    );
  }
});

var ButtonDown = React.createClass({
  render: function() {
    console.log('Call render');
    return (
      <div className="button">
        <a href="#" data-scroll-nav={this.props.index}>
          <i className="chevron down icon" />
        </a>
      </div>
    )
  }
});
