var TitleBlock = React.createClass({
  render: function() {
    return (
      <section id="TitleBlock" data-scroll-index="0">
        <img id="logo" className="ui image" src="img/title/ITAC-Logo.png" />
        <img id="logo-text" className="ui image" src="img/title/itac.png" />
        <div className="myContent">
          <h2>成為大學生的最後一步</h2>
          <a href="#"><i className="dropdown icon scroll" data-scroll-nav="1"></i></a>
        </div>
      </section>
    )
  }
})

module.exports = TitleBlock;
