import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LogonComponent } from './auth/logon/logon.component';
import { PlayingComponent } from './playing/playing.component';
import { WelcomeComponent } from './welcome/welcome.component'
//import { Card2cardsComponent } from './card2cards/card2cards.component'

import {Test1Component} from './test1/test1.component'

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },

  {path: 'welcome', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'logon', component: LogonComponent},
  // {path: 'test', component: Test1Component},
  {path: 'play', component: PlayingComponent}

];
//Routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
