import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateComponent } from './create/create.component';
import { PlayComponent } from './play/play.component';
import { GameService } from './game.service'



const routes: Routes = [
{
	path: '',
	component: DashboardComponent
},
{
	path: 'new_question',
	component: CreateComponent
},
{
	path: 'lets_play',
	component: PlayComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
