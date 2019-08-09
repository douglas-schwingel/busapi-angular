import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ba-load-button',
  templateUrl: './load-button.component.html',
  styleUrls: ['./load-button.component.css']
})
export class LoadButtonComponent implements OnInit {

  @Input() hasMore: boolean;

  constructor() { }

  ngOnInit() {
  }

}
