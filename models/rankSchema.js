const mongoose = require('mongoose');

const rankSchema = new mongoose.Schema({
    userID: {type: String, require: true, unique: true},
    serverID: {type: String, require: true},
    rank: {type: Number, default: 0},
    
})

const model = mongoose.model('Ranks', rankSchema);

module.exports = model;