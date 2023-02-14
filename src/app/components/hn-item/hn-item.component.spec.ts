import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnItemComponent } from './hn-item.component';

describe('HnItemComponent', () => {
  let component: HnItemComponent;
  let fixture: ComponentFixture<HnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
