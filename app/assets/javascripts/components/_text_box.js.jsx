var TextAreaCounter = React.createClass({
  name: 'TextAreaCounter',
  mixins: [logMixin],
  propTypes: {
    text: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      text: "The beginning of time",
    };
  },

  _textChange: function(e) {
    this.setState({
      text: e.target.value
    });
  },

  render: function() {
    return (
      <div>
        <textarea onChange={ this._textChange } defaultValue={ this.state.text }></textarea>
        <h3>{ this.state.text.length }</h3>
        <Counter count={ 20 }/>
      </div>
    );
  }
});
