import {NgModule} from "@angular/core";

import {BusListComponent} from "./bus-list.component";
import {BusesComponent} from "./buses-component/buses.component";
import {LoadButtonComponent} from "./load-button/load-button.component";
import {FilterByNamePipe} from "./filter-by-name.pipe";
import {CommonModule} from "@angular/common";
import {BusModule} from "../bus/bus.module";

@NgModule({
  declarations: [
    BusListComponent,
    BusesComponent,
    FilterByNamePipe,
    LoadButtonComponent
  ],
  imports: [CommonModule, BusModule]
})
export class BusListModule {

}
