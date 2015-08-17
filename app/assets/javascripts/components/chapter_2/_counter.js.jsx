var Counter = React.createClass({
  name: 'Counter',
  mixins: [logMixin],
  propTypes: {
    count: React.PropTypes.number.isRequired
  },

  render: function() {
    return (
      <span>{ this.props.count }</span>
    );
  }
});
