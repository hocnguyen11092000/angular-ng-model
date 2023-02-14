import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnItemContentComponent } from './hn-item-content.component';

describe('HnItemContentComponent', () => {
  let component: HnItemContentComponent;
  let fixture: ComponentFixture<HnItemContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnItemContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnItemContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
