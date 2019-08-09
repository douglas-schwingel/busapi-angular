import {Component, Input, OnInit} from '@angular/core';
import {Bus} from '../bus/bus';
import {BusPage} from '../bus/bus-page';
import {ActivatedRoute} from '@angular/router';
import {BusService} from "../bus/bus.service";

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  private page: BusPage;
  private buses: Bus[];
    @Input() filter = '';
  hasMore: boolean = true;

  constructor(private service: BusService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.pageable;
    this.buses = this.page.content;
  }

  load() {
    this.service.listBusLinesPaginated(++this.page.number)
      .subscribe(page => {
        this.filter = '';
        this.buses = this.buses.concat(page.content);
        if(page.number == page.totalPages) this.hasMore = false;
      })
  }

}
