import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BusPage} from './bus-page';

const API = 'http://localhost:8080/line-service/v1';

@Injectable({providedIn: 'root'})
export class BusService {

  constructor(private http: HttpClient) {}

  listBusLinesPaginated(page: number) {
    const params = new HttpParams().append('page', page.toString()).append('size', '15');
    return this.http.get<BusPage>(`${API}/lines`, {params});
  }
}
