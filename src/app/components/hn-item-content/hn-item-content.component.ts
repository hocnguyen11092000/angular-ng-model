import { HNContent } from './../../../model/hN.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-hn-item-content',
  templateUrl: './hn-item-content.component.html',
  styleUrls: ['./hn-item-content.component.scss'],
})
export class HnItemContentComponent implements OnInit {
  @Input() data: any;
  @Input() dataArr: any;
  contentForm: any;
  isVisible: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contentForm = this.fb.group({
      key: [null],
      value: [null],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  handleSubmit() {
    if (this.contentForm.valid) {
      const data = this.contentForm.value;
      const content = new HNContent(data);
      this.dataArr.push(content);
    }
  }
}
