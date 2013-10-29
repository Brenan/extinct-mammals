var Mammal = require('./Mammal.js');


module.exports.listAllMammals = function(req,res){
	Mammal.find({type: req.params.type},function(err, mammals){
		res.send(mammals);
	});
};

module.exports.saveMammal = function(req,res){
	var newMammal = new Mammal({
		name: req.body.name,
		type: req.body.type,
		yearExtinct: req.body.yearExtinct
	});
	newMammal.save(function(err){
		res.send({success: true});
	});
};

