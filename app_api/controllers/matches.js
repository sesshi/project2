var mongoose = require('mongoose');
// var profile = mongoose.model('Profile');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.matchesRequestAdd = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.matchesRequestDelete = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.matchesAcceptAdd = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
module.exports.matchesAcceptDelete = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};
