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
        <h3>About Us</h3>
        <p> This is a lesson about React!</p>
    </div>
  )
}

module.exports = About;
