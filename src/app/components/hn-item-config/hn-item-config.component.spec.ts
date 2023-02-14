import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnItemConfigComponent } from './hn-item-config.component';

describe('HnItemConfigComponent', () => {
  let component: HnItemConfigComponent;
  let fixture: ComponentFixture<HnItemConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HnItemConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HnItemConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
