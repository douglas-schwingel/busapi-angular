import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {BusService} from '../bus/bus.service';
import {BusPage} from '../bus/bus-page';

@Injectable({providedIn: 'root'})
export class BusListResolver implements Resolve<Observable<BusPage>> {

  constructor(private service: BusService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const page = route.params.page;
    return this.service.listBusLinesPaginated(page);
  }

}
