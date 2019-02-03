const restful = require('node-restful')
const mongoose = restful.mongoose

const clientSchema = new mongoose.Schema({
    name: {type:String, required:true},
    telphone:{type:Number, required:true},
    address:{type:String}
});
module.exports = restful.model('Client',clientSchema)
