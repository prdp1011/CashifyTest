import { ApiService } from './../common/services/api.service';
import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClientComments } from '../models/fav';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  customOptions: OwlOptions = {
    autoHeight: true,
    center: true,
    nav: false,
    items: 1,
    margin: 30,
    loop: true,
    dots: true
  };
  comments$: Observable<ClientComments[]> = this.api.getClientComments();


  constructor(private api: ApiService) { }

}
