import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

//The root app module
@NgModule({

  //our new components are added here
  //using the cli automatically adds components to declarations
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent
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
