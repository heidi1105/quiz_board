let mongoose=require('mongoose');
let QA = mongoose.model('QA');
let Score = mongoose.model('Score');
let session = require('express-session');
let config = {secret:"YouWillFloatToo"};
mongoose.Promise = global.Promise;



module.exports={
	login:(req, res)=>{
		req.session.user=req.body.user;
		res.json(req.session.user)
	},

	logout:(req, res)=>{
		req.session.user="";
		res.json(req.session.user)
	},

	getUser:(req, res)=>{
		if(req.session.user){
			res.json(req.session.user)
		}else{
			res.json(false)
		}
	},

	createQ:(req, res)=>{
		let qa = new QA(req.body)
		qa.save((err, savedQA)=>{
			if (err){
				res.json(err)
			}else{
				res.json(savedQA)
			}
		})

	},

	getQuestions:(req, res)=>{
		QA.aggregate([{$sample:{size:3}}], (err, questions)=>{
			if (err){
				console.log(err)
			}else{
				let rand1;
				let rand2;
				let temp;
				for (let i=0; i<3; i++){
//					questions[i]= questions[i].options.sortBy(options, 'ans')
					rand1=Math.floor(Math.random()*3)
					rand2=Math.floor(Math.random()*3)
					temp=questions[i].options[rand1];
					questions[i].options[rand1]=questions[i].options[rand2];
					questions[i].options[rand2]=temp;
		  		}				
		  			res.json(questions)				
			}
			})
	},

	marking:(req, res)=>{
		let score = new Score (req.body)
		score.user=req.session.user
		score.save((err, result)=>{
			if (err){
				console.log("err in controllers/marking ")
			}else{
  				req.session.message="Great effort, "+result.user+"! Your score is "+ result.score+"/3"
				res.json(req.session.message)
			}
		})


	},


	getScore:(req, res)=>{
		Score.find().sort('-score').exec((err, scores)=>{
			if (err){
				console.log(err)
			}else{
				res.json(scores)
			}
		})

	},

	getMessage:(req, res)=>{
		res.json(req.session.message)
	},

}






