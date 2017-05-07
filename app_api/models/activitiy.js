var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: true
    },
    coords: {
        type: [Number], //longitude, latitude ordering
        index: '2dsphere'
    },
    activityType: [String],
    description: String,
    creationDate: {
        type: Date,
        "default": Date.now
    },
    activityDate: Date,
    difficulty: String,
    chatLog: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    }]
});

mongoose.model('Activity', activitySchema, 'activities');