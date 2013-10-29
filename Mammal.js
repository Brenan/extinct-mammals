var mongoose = require('mongoose');

Mammal = mongoose.model('Mammals',new mongoose.Schema({
	name: String,
	type: String,
	yearExtinct: Number
}));

module.exports = Mammal;