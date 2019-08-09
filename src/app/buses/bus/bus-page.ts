import {Bus} from './bus';
import {Pageable} from './pageable';

export class BusPage {
  content: Bus[];
  empty: boolean;
  number: number;
  numberOfElements: number;
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  size: number;
}
