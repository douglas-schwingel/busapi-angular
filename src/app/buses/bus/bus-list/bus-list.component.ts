import {Component, Input, OnInit} from '@angular/core';
import {BusModel} from '../bus-model';
import {BusService} from '../bus.service';
import {BusPage} from '../bus-page';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  private page: BusPage;
  private buses: BusModel[];
  constructor(private service: BusService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const page = this.activatedRoute.snapshot.params.page;
    this.service.listBusLinesPaginated(page - 1).subscribe(busPage => {
      this.page = busPage;
      this.buses = busPage.content;
    });
  }

}
