import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksDigitalComponent } from './clocks-digital.component';

describe('ClocksDigitalComponent', () => {
  let component: ClocksDigitalComponent;
  let fixture: ComponentFixture<ClocksDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClocksDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClocksDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
