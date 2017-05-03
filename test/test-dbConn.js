var assert = require('assert');
var mongoose = require('mongoose');
var mlab = require('../mlab-user-pass.js');

describe('Mlab-db-login-details', function(){
    before(function(){//before the test begins
        //nothing to setup
    });

    after(function(){// after all the test have finished
        mongoose.connection.close();
    });

    beforeEach(function(){//run before each test
        //nothig to setup
    })

    //run tests
    it('Imports the user details from the mlab-user-pass.js file', function(){
        assert.equal(mlab.user, 'matt', 'The user name should be matt');
    });
    it('Imports the password details from the mlab-user-pass.js file', function(){
        assert.equal(mlab.pass, 'password', 'The user name should be matt');
    });
});

describe('Mlab database connection', function(){
    before(function(done){//before the test begins
      db = mongoose.connect('mongodb://localhost/test');
      done();
    });

    after(function(done){// after all the test have finished
        mongoose.connection.close();
        done();
    });

    beforeEach(function(){//run before each test
        //nothig to setup
    })

});