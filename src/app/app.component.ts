import { Component, OnInit } from '@angular/core';
import { DATA_TO_TEST } from 'src/data/data';
import { hN } from 'src/model/hN.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-model';
  data = DATA_TO_TEST;
  hn = new hN();

  ngOnInit(): void {
    this.hn.setData(this.data);
    console.log(this.hn.data);
  }
}
