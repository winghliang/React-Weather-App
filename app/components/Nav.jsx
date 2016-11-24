var React = require('react');
var {Link, IndexLink} = require('react-router'); // same as var Link = require('react-router').Link

// var Nav = React.createClass({
//   render: function (){
//     return (
//       <div>
//         <IndexLink to="/" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Get Weather</IndexLink>
//         <Link to="/about" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>About</Link>
//         <Link to="/examples" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Examples</Link>
//       </div>
//     );
//   }
// });

var Nav = (props) => {
  return (
    <div>
      <IndexLink to="/" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>About</Link>
      <Link to="/examples" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Examples</Link>
    </div>
  )
};

module.exports = Nav;
