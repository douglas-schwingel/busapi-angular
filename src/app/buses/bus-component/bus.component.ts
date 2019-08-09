import {Component, Input} from '@angular/core';

@Component({
  selector: 'ba-single-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent {

  @Input() nome = '';
  @Input() id = '';
  @Input() codigo = '';

}
