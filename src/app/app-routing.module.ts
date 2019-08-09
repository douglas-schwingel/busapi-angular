import {Input, NgModule} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {BusListComponent} from './buses/bus-list/bus-list.component';
import {BusListResolver} from "./buses/bus-list/bus-list.resolver";

const routes: Routes = [
  {path: '', redirectTo: 'lines/1', pathMatch: 'full'},
  {path: 'lines/:page', component: BusListComponent, resolve: {pageable: BusListResolver}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  @Input() filter = '';

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data.filter = this.filter;
  }
}
