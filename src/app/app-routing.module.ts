import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusListComponent} from './buses/bus/bus-list/bus-list.component';
import {BusListResolver} from './buses/bus/bus-list/bus-list.resolver';


const routes: Routes = [
  {path: 'lines/:page', component: BusListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
