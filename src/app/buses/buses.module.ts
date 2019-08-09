import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusListComponent} from './bus/bus-list/bus-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    BusListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BusesModule { }
