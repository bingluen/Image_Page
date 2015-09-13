var TitleBlock = React.createClass({displayName: "TitleBlock",
  render: function() {
    return (
      React.createElement("section", {id: "MainBlock", "data-scroll-index": "0"}, 
        React.createElement("img", {id: "logo", className: "ui image", src: "img/title/ITAC-Logo.png"}), 
        React.createElement("img", {id: "logo-text", className: "ui image", src: "img/title/itac.png"}), 
        React.createElement("div", {className: "myContent"}, 
          React.createElement("h2", null, "成為大學生的最後一步"), 
          React.createElement("a", {href: "#"}, React.createElement("i", {className: "dropdown icon scroll", "data-scroll-nav": "1"}))
        )
      )
    )
  }
})

module.exports = TitleBlock;
