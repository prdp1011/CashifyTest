import { ServiceList } from './../models/fav';
import { ApiService } from './../common/services/api.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EatOption } from '../models/fav';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {
  customOptions: OwlOptions = {
      autoHeight: true,
          center: true,
          nav: false,
          items: 5,
          margin: 30,
          loop: true,
          autoplay: false,
          dots: true,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 3
            },
            940: {
              items: 5
            }}
    };

  fetures: ServiceList[];
  list: EatOption[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    forkJoin([this.api.getEatOption(), this.api.getServicesList()])
    .subscribe(res => {
      this.list = res[0];
      this.fetures = res[1];
    });
  }

}
