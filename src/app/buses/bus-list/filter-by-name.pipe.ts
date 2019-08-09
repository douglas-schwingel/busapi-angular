import {Pipe, PipeTransform} from "@angular/core";
import {Bus} from "../bus/bus";

@Pipe({name: 'filterByName'})
export class FilterByNamePipe implements PipeTransform {

  transform(buses: Bus[], descriptionQuery: string): any {
    if (descriptionQuery) {
      return buses.filter(bus => bus.nome.toUpperCase().includes(descriptionQuery.toUpperCase()))
    } else {
      return buses;
    }
  }

}
