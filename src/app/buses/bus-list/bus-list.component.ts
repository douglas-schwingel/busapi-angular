import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Bus} from '../bus/bus';
import {BusPage} from '../bus/bus-page';
import {ActivatedRoute} from '@angular/router';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {BusService} from "../bus/bus.service";

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit, OnDestroy {

  private page: BusPage;
  private buses: Bus[];
  @Input() filter = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: boolean = true;

  constructor(private service: BusService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.pageable;
    this.buses = this.page.content;
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.service.listBusLinesPaginated(++this.page.number)
      .subscribe(page => {
        this.buses = this.buses.concat(page.content);
        if(page.number == page.totalPages) this.hasMore = false;
      })
  }

}
