import {NgModule} from "@angular/core";
import {BusComponent} from "./bus-component/bus.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BusComponent
  ],
  exports: [
    BusComponent
  ],
  imports: [CommonModule, HttpClientModule]
})
export class BusModule {

}
