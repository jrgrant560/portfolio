import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksAnalogComponent } from './clocks-analog.component';

describe('ClocksAnalogComponent', () => {
  let component: ClocksAnalogComponent;
  let fixture: ComponentFixture<ClocksAnalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClocksAnalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksAnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
