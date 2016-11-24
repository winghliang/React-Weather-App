var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

// functional stateless version
// don't need "this" since props was passed in
var Main = (props) => {
  return (
    <div>
      <Nav/>
      {props.children}
    </div>
  );
}

module.exports = Main;
