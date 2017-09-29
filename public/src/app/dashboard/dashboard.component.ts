import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	user: string =""
	scores: object[]=[]
	message:string=""

	constructor(private _gameService:GameService, private _router:Router) { }

	getMessage(){
	  	this._gameService.getMessage()
	  	.then((data)=>{
  			this.message=data
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})	
	 }

	getScore(){
	  	this._gameService.getScore()
	  	.then((data)=>{
  			this.scores=data

	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})	
	  }


	getUser(){
	  	this._gameService.getUser()
	  	.then((data)=>{
	  		if(data){
	  			this.user=data
	  		}else{
	  			this.login()
	  		}
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})

	}

	login(){
	  	this.user = prompt ("Please enter your name", "name");
	  	this._gameService.login(this.user)
	  	.then((data)=>{
	  		alert("Welcome! "+ this.user)
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})

	}

	logout(){
	  	this._gameService.logout()
	  	.then((data)=>{
	  		this.login()
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})

	}

	redirect(){
		this._router.navigate(['lets_play'])
	}

  ngOnInit() {
  	this.getUser();
  	this.getScore();
  	this.getMessage();



  }

}
