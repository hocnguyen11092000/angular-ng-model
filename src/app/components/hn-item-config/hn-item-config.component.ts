import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hn-item-config',
  templateUrl: './hn-item-config.component.html',
  styleUrls: ['./hn-item-config.component.scss'],
})
export class HnItemConfigComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}
}
