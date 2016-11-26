var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(event){
    event.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0){
        this.refs.location.value = '';
        this.props.onSearch(location);
    }
  },

  render: function (){
    return (
      <div>
        <form onSubmit = {this.onFormSubmit} >
          <div>
            <input type="search" placeholder="Search weather by city" ref="location"></input>
          </div>
          <div>
            <button className="button expanded">Get Weather</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;
