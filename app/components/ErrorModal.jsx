var React = require('react');

var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server')

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error',
    };
  },

  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },

  componentDidMount: function(){

    // the code below used to be in the render method, but was moved here to fix issue where, after entering a non-existent city,
    // a search for a valid city would not work.
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    );
    // the code ABOVE used to be in the render method, but was moved here to fix issue where, after entering a non-existent city,
    // a search for a valid city would not work.

    //the below was added to address issue above
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    //the above was added to address issue above

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },

  render: function (){
    return (
      <div>
      </div>
    )
  }
});

module.exports = ErrorModal;
