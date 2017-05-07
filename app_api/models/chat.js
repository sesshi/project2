var mongoose = require('mongoose');

var chatSchema = new mongoose.Schema({
    username: String,
    message: String,
    timePosted: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model('Chat', chatSchema, 'chatlog');