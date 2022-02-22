var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	name: String,
	board: String,
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

Schema.methods.create = function(obj, user, sd) {
	this.name = obj.name;
	this.board = obj.board;
}

module.exports = mongoose.model('Column', Schema);