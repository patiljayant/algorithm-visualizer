const mongoose = require('mongoose');

const algorithmSchema = new mongoose.Schema({
    name : String,
    info: String,
    example: String,
    timec: String,
    spacec: String,
    code : [{
        language:String,
        code:String
    }]
});    


module.exports = mongoose.model('Algorithms', algorithmSchema);