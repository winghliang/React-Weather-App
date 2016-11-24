var React = require('react');

// using ES6 destructuring inside of arguments:
// this is equivalent to
// var WeatherMessage = (props) => {
  // var {temp, location} = props;
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>The temperature in {location} is {temp}.</h3>
  )
}

module.exports = WeatherMessage
