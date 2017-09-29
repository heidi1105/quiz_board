import { Component, OnInit } from '@angular/core';
import { GameService } from './../game.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
	newQ:object={ question:"", options:[{ans:"", correct:true}, {ans:"", correct:false}, {ans:"", correct:false}]}


	constructor(private _gameService:GameService, private _router:Router) { }

  ngOnInit() {
  }

  create(newQ){
	  	this._gameService.createQ(newQ)
	  	.then((data)=>{
	  		if(data){
	  		console.log(data)
	  		newQ={ question:"", options:[{ans:"", correct:true}, {ans:"", correct:false}, {ans:"", correct:false}]}
	  		alert("You have successfully created the question")
  			this._router.navigateByUrl('/')
  			}
	  	})
	  	.catch((err)=>{
	  		console.log("err")
	  	})
  }


}
