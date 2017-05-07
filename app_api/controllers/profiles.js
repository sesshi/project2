require('../models/db');
var mongoose = require('mongoose');
var profile = mongoose.model('Profile'); // error when trying to load schema

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.profilesCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
};

// api/profiles/:userid     (try: localhost:3000/api/profiles/590f1cd3f36d281fc3b965c1)
module.exports.profilesReadOne = function (req, res) {
    if (req.params && req.params.userid) { //Check that profileid exists in the request parameters
        profile
            .findById(req.params.userid) //Get userid from URL parameters and give it to findById method.
            .exec(function(err, profile) { //Define callback to accept possible parameters.
                if (!profile) { //Return 404 if no profile found
                    sendJsonResponse(res, 404, { 
                        "message": "profileid not found"
                    });
                    return;
                } else if (err) { //Return 404 if Mongoose has an error
                    sendJsonResponse(res, 404, err)
                    return;
                }
                sendJsonResponse(res, 200, profile); // If there are no errors in Mongoose, Send JSON doocument 200 response.
            });
    } else { 
        sendJsonResponse(res, 404, { //
            "message": "No profileid in the request"
        });
    } 
    
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
