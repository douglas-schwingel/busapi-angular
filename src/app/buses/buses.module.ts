import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BusListModule} from "./bus-list/bus-list.module";
import {BusModule} from "./bus/bus.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusListModule,
    BusModule,
  ],
})
export class BusesModule { }
