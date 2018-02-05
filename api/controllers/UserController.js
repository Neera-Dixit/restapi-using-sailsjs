/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/*
	  Handler for GET /user/
	*/
	find: function getRequestHandler(req,res) {
		User.find().exec(function getUserCB(err,data){
			if(err) {
				res.serverError("Error while fetching Data");
				return;
			}
			res.ok(data);
		});
	},

	/*
	  Handler for GET /user/id
	*/
	findOne: function getRequestHandler(req,res) {
		var _id = parseInt(req.params.id);

		User.find({_id: _id}).exec(function getUserCB(err,data){
			if(err) {
				res.serverError("Error while fetching Data");
				return;
			}
			res.ok(data);
		});
	},

	/*
		Handler for POST /user/
	*/
	create: function postRequestHandler(req,res) {
		var _bodyData = req.body;

		User.create(_bodyData).exec(function createUserCB(err, createdData){
			if(err) {
				res.serverError("Error while creating Data");
				return;
			}
			res.ok('new user created');
		});
	},

	/*
		Handler for PUT /user/
	*/
	update: function putRequestHandler(req,res) {
		var _bodyData = req.body;
		var _id = parseInt(req.params.id);

		User.update({_id : _id},_bodyData).exec(function createUserCB(err, updatedData){
			if(err) {
				res.serverError("Error while updating Data");
				return;
			}
			res.ok(updatedData);
		});
	},

	/*
		Handler for DELETE /user/
	*/
	destroy: function deleteRequestHandler(req,res) {
		var _id = parseInt(req.params.id);

		User.destroy({_id: _id}).exec(function deleteUserCB(err, deletedData){
			if (err) {
				res.serverError("Error while deleting Data");
				return;
			}
			console.log("rec: ",deletedData);

			deletedData.length > 0 ? res.ok('Record with id : '+_id+' deleted') : res.ok('No Records with id '+_id);
		});
	}

};
