import { TopMenu, EatOption, ServiceList, ClientComments } from './../../models/fav';
import { Injectable } from '@angular/core';
import { TOP_MENU, EAT_OPTION, SER_LIST, CMTS_LIST } from 'src/app/data/data';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getTopMenu(): Observable<TopMenu[]>{
    return of(TOP_MENU);
  }

  getEatOption(): Observable<EatOption[]> {
    return of(EAT_OPTION);
  }

  getServicesList(): Observable<ServiceList[]> {
    return of([...SER_LIST, ...SER_LIST, ...SER_LIST]);
  }

  getClientComments(): Observable<ClientComments[]> {
    return of([...CMTS_LIST, ...CMTS_LIST, ...CMTS_LIST]);
  }


}
