var mongoose = require('mongoose');
// var profile = mongoose.model('Profile'); // error when trying to load schema

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.profilesCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.profilesReadOne = function (req, res) {
    profile
        .findById(req.params.userid) //Get userid from URL parameters and give it to findById method.
        .exec(function(err, profile) { //Define callback to accept possible parameters.
            sendJsonResponse(res, 200, profile); // Send JSON document found as a JSON response.
        });
};
module.exports.profilesDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.profilesUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.profilesFindAlgorithm = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
