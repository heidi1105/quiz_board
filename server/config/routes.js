let Game = require('./../controllers/games')
let path= require('path')


module.exports = (app)=>{
	app.post('/login', Game.login);
	app.post('/marking', Game.marking);
	app.get('/getScore', Game.getScore);
	app.get('/getMessage', Game.getMessage);

	app.get('/getUser', Game.getUser);
	app.get('/logout', Game.logout);
	app.post('/createQ', Game.createQ);
	app.get('/getQuestions', Game.getQuestions);

	app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
    });
}