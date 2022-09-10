import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBarberpoleComponent } from './animation-barberpole.component';

describe('AnimationBarberpoleComponent', () => {
  let component: AnimationBarberpoleComponent;
  let fixture: ComponentFixture<AnimationBarberpoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationBarberpoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationBarberpoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
