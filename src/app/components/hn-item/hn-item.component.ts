import { Component, Input, OnInit } from '@angular/core';
import { HnArray } from 'src/model/hN.model';

@Component({
  selector: 'app-hn-item',
  templateUrl: './hn-item.component.html',
  styleUrls: ['./hn-item.component.scss'],
})
export class HnItemComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
