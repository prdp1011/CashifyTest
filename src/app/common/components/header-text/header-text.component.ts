import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss']
})
export class HeaderTextComponent implements OnInit {
  @Input() heading = 'Want To Eat';
  @Input() desc = 'Try our Most Delicious food and it usually take minutes to deliver!';
  constructor() { }

  ngOnInit(): void {
  }

}
