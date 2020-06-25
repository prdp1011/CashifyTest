import { ApiService } from './../common/services/api.service';
import { Component, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { TopMenu } from '../models/fav';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navResClass = 'topnav';
  images$: Observable<TopMenu[]> = this.api.getTopMenu();
  customOptions: OwlOptions = {
      autoHeight: true,
      center: true,
      nav: false,
      items: 1,
      margin: 30,
      loop: true,
      dots: false
  };
  constructor(private api: ApiService) {}

  myFunction() {
    if (this.navResClass === 'topnav') {
      this.navResClass += ' responsive';
    } else {
      this.navResClass = 'topnav';
    }
  }

}
