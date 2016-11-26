var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=new%20york">New York, NY</Link>
        </li>
        <li>
          <Link to="/?location=cupertino">Cupertino, CA</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
