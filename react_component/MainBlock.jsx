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
        <div className="button">
          <a href="#" data-scroll-nav={parseInt(this.props.scrollIndex) + 1}>
            <i className="chevron down icon" />
          </a>
        </div>
      </section>
    );
  }
});


module.exports = MainBlock;
