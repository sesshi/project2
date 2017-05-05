
var should = require('chai').should();

var mongoose = require('mongoose');
var mlab = require('../mlab-user-pass.js');
require('../app_server/models/profile.js');
var Profile = mongoose.model('Profile')
var db;

describe('Profile: models', function(){
    before(function(done){//before the test begins
        var dbURI = {
            remote: 'mongodb://'+mlab.testUser+':'+mlab.testPass+'@ds127391.mlab.com:27391/test-7975',
            local: 'mongodb://localhost:27017/test'
        };
        var options = {
            server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
            replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
        };

        db = mongoose.connect(dbURI.local, options);
        done();
    });

    after(function(done){// after all the test have finished
        mongoose.connection.close();
        done();
    });

    beforeEach(function(done) {
        // create profile instance
        var profile_instance = new Profile({
            username: 'Matt',
            dateOfBirth: new Date('1984-03-29'),
            gender: 0
        });
        // save the new model instance, passing a callback
        profile_instance.save(function(error) {
            if (error) console.log('(saving to database) error ' + error.message);
            else console.log('no error - data saved to database');
            done();
        });
    });

    it('should find a profile by username', function(done) {
    Profile.findOne({ username: 'Matt' }, function(err, profile) {
      profile.username.should.eql('Matt');
      console.log("   username: ", profile.username);
      done(); //Call done to tell mocha that we are done with this test
      });
    });

    afterEach(function(done) {
        Profile.remove({}, function() {
            done();
        });
    });

});