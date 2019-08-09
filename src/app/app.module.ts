import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BusesModule} from './buses/buses.module';
import {ErrorsModule} from "./errors/errors.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrorsModule,
    BusesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
