import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusListComponent} from './buses/bus-list/bus-list.component';
import {BusListResolver} from "./buses/bus-list/bus-list.resolver";
import {NotFoundErrorComponent} from "./errors/not-found-error/not-found-error.component";

const routes: Routes = [
  {path: '', redirectTo: 'lines/1', pathMatch: 'full'},
  {path: 'lines/:page', component: BusListComponent, resolve: {pageable: BusListResolver}},
  {path: '**', component: NotFoundErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
