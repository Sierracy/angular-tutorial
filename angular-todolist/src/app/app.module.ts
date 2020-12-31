import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//The root app module
@NgModule({

  //our new components are added here
  //using the cli automatically adds components to declarations
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //services we want to include
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
