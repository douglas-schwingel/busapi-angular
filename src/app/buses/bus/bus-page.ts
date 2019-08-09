import {BusModel} from './bus-model';
import {Pageable} from './pageable';

export class BusPage {
  content: BusModel[];
  empty: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  size: number;
}
