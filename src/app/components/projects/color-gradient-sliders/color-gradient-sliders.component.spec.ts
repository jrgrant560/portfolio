import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGradientSlidersComponent } from './color-gradient-sliders.component';

describe('ColorGradientSlidersComponent', () => {
  let component: ColorGradientSlidersComponent;
  let fixture: ComponentFixture<ColorGradientSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorGradientSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorGradientSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
