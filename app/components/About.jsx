var React = require('react');

// var About = React.createClass({
//   render: function (){
//     return (
//       <div>
//           <h3>About Us</h3>
//           <p> This is a lesson about React.</p>
//       </div>
//     )
//   }
// });

// stateless functional version
var About = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">About</h1>
        <p>This is a weather app built using React, Node.js, Express.js, Webpack, Babel, and Foundation.</p>
        <p>The weather is obtained via an API provided by <a href="http://openweathermap.org">openWeatherMap.org</a>.  With this app, you can type in a city, and the current weather in that city will be returned.</p>
        <p>The github repo for this app is at this <a href="https://github.com/winghliang/React-Weather-App">github link</a>.</p>
    </div>
  )
}

module.exports = About;
