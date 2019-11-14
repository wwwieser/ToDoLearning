import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToDoListModule } from './features/to-do-list/to-do-list.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToDoListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
