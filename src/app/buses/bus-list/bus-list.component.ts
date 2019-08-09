import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Bus} from '../bus/bus';
import {BusPage} from '../bus/bus-page';
import {ActivatedRoute} from '@angular/router';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.pageable;
    this.buses = this.page.content;
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.filter = filter)
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
