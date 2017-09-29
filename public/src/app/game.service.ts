import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

  constructor(private _http:Http) { }


  login(user){
  	return this._http.post('/login', {user:user}).map(Response=>Response.json()).toPromise()
  }

  logout(){
  	return this._http.get('/logout').map(Response=>Response.json()).toPromise()
  }

  getUser(){
  	return this._http.get('/getUser').map(Response=>Response.json()).toPromise()
  }

  getMessage(){
    return this._http.get('/getMessage').map(Response=>Response.json()).toPromise()
  }

  createQ(newQ){
    return this._http.post('/createQ', newQ).map(Response=>Response.json()).toPromise()
  }


  getQuestions(){
    return this._http.get('/getQuestions').map(Response=>Response.json()).toPromise()
  }

  marking(score){
    return this._http.post('/marking', {score:score}).map(Response=>Response.json()).toPromise()
  }

  getScore(){
    return this._http.get('/getScore').map(Response=>Response.json()).toPromise()
  }
}
