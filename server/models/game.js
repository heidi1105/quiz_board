let mongoose = require('mongoose')



let qaSchema = new mongoose.Schema({
	question: {type: String, required:true, minlength:15},
	options:[{ans:String, correct:Boolean}]}
	,{timestamps:true}, {versionKey:false});
mongoose.model('QA', qaSchema);

let scoreSchema = new mongoose.Schema({
	user: {type: String, required:true},
	score:{type:Number}}
	,{timestamps:true}, {versionKey:false});
mongoose.model('Score', scoreSchema);