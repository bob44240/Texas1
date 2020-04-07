import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LogonComponent } from './auth/logon/logon.component';
import { PlayingComponent } from './playing/playing.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HandComponent } from './parts/hand/hand.component';
import { Card2cardComponent } from './card2card/card2card.component';
import { Card2cardsComponent } from './card2cards/card2cards.component'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LogonComponent,
    PlayingComponent,
    WelcomeComponent,
    HandComponent,
    Card2cardComponent,
    Card2cardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
