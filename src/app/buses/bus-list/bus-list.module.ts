import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {BusListComponent} from "./bus-list.component";
import {BusesComponent} from "./buses-component/buses.component";
import {LoadButtonComponent} from "./load-button/load-button.component";
import {FilterByNamePipe} from "./filter-by-name.pipe";
import {BusModule} from "../bus/bus.module";
import {SearchModule} from "../../search/search.module";
import {DarkenOnHoverModule} from "../../shared/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
  declarations: [
    BusListComponent,
    BusesComponent,
    FilterByNamePipe,
    LoadButtonComponent
  ],
  imports: [CommonModule, BusModule, SearchModule, DarkenOnHoverModule]
})
export class BusListModule {

}
