var MainContainer = React.createClass({
    render: function() {
        return (
            <div id="reactRender">
              <MainBlock scrollIndex="0" />
              <IntroductionBlock scrollIndex="1" />
              <ActivityBlock scrollIndex="2" />
              <ProjectBlock scrollIndex="3" />
            </div>
        );
    }
});

$(function() {
    $.scrollIt();
});

React.render(<MainContainer />, $('#Container')[0]);
