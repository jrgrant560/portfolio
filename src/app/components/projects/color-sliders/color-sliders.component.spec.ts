import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSlidersComponent } from './color-sliders.component';

describe('ColorSlidersComponent', () => {
  let component: ColorSlidersComponent;
  let fixture: ComponentFixture<ColorSlidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorSlidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
