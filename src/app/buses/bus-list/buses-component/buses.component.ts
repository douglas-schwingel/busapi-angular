import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Bus} from "../../bus/bus";

@Component({
  selector: 'ba-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnChanges {

  @Input() buses: Bus[];
  @Input() rows: any[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.buses) {
      this.rows = this.groupBuses(this.buses);
    }
  }

  groupBuses(buses: Bus[]) {
    const newRows = [];
    for (let i = 0; i < this.buses.length; i += 4) {
      newRows.push(buses.slice(i, i + 4));
    }
    return newRows;
  }
}
