var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

var LikeButton = React.createClass({
	getInitialState: function() {
		return {liked: false};
		return {counter: 0};
	},
	handleClick: function(e) {
		this.setState({liked: !this.state.liked});

		},
	render: function() {
		var text = this.state.liked ? 'Liked' : 'Like';
		
		
		return (
			<div>
			<button onClick={this.handleClick}>{text}</button>
			</div>
			);
	},
});

ReactDOM.render(<LikeButton />, document.getElementById('button'));



//module.exports = LikeButton;