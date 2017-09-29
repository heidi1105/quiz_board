import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service'
import { Router } from '@angular/router'

class Option{
	constructor(public ans:string="", public correct:boolean=false){}
}

class Question{
	constructor(public question:string="", public options:Option[]=[]){}
}

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})


export class PlayComponent implements OnInit {
	user: string =""
	questions: Question[]=[]
	myAns: object[]=[]
	correctAns: number[]=[]

	constructor(private _gameService:GameService, private _router:Router) { }

	getUser(){
	  	this._gameService.getUser()
	  	.then((data)=>{
	  		if(data){
	  			this.user=data
	  		}else{
	  			alert("Please login first")
	  			this._router.navigateByUrl('/')
	  		}
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})

	}

	getQuestions(){
	  	this._gameService.getQuestions()
	  	.then((data)=>{
	  		if(data.length<3){
				alert("Please create more questions first")
	  			this._router.navigate(['new_question'])
		  	}else{
		  		console.log(data)
		  		this.questions=data

	  		}
	  	})
	  	.catch((err)=>{
	  		console.log(err)
	  	})	
	}

	marking(myAns){

		let score =0
		for (let i = 0; i<3; i++){
			myAns[i]=Number(myAns[i])
			for (let j = 0; j<3; j++){
				if (this.questions[i].options[j].correct){
					if (myAns[i]==j){
						score++
					}
				}
			}
		}

		console.log(myAns);
		console.log(score);

		this._gameService.marking(score)
	  	.then((data)=>{
  			this._router.navigate([''])
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})

}



  ngOnInit() {
  	this.getUser()
  	this.getQuestions()


  }




}
