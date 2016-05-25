var React = require('react');
var ReactNative = require('react-native');
var nodeEmoji = require('node-emoji');

class Emoji extends React.Component {
  render() {
    var emoji = nodeEmoji.get(this.props.name);
    return (<ReactNative.Text>{emoji}</ReactNative.Text>);
  }
}

Emoji.propTypes = {
  // Emoji's name
  name: React.PropTypes.string.isRequired,
};

module.exports=Emoji;
