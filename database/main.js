const mongoose = require('mongoose');
const config = require("../config.json");
const mongoConnect = async() => {
	mongoose.connect(config.mongoUri,{
		useNewUrlParser: true,
		useUnifiedTopology: true
	    
	    } ).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
}


module.exports = {mongoConnect}