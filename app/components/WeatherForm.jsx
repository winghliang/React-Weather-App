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
            <input type="text" placeholder="Enter city name" ref="location"></input>
          </div>
          <div>
            <button>Get Weather</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = WeatherForm;