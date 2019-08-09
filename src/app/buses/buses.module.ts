import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusListComponent} from './bus-list/bus-list.component';
import {HttpClientModule} from '@angular/common/http';
import { BusComponent } from './bus-component/bus.component';
import { BusesComponent } from './buses-component/buses.component';
import {FilterByNamePipe} from "./bus-list/filter-by-name.pipe";
import { LoadButtonComponent } from './bus-list/load-button/load-button.component';


@NgModule({
  declarations: [
    BusListComponent,
    BusComponent,
    BusesComponent,
    FilterByNamePipe,
    LoadButtonComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class BusesModule { }
