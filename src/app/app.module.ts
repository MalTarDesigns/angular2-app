import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//Modules - these get put in the imports section
import {PeopleModule } from './people';

//Components
import { HeroesComponent } from './heroes';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
