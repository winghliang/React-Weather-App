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

var Nav = React.createClass({

  onSearch: function(event){
    event.preventDefault();
    alert('Not Yet Wired Up!')
  },

  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={ {fontWeight: 'bold'} }>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather"></input>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});


module.exports = Nav;
