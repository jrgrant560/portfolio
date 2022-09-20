import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationTypingComponent } from './animation-typing.component';

describe('AnimationTypingComponent', () => {
  let component: AnimationTypingComponent;
  let fixture: ComponentFixture<AnimationTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationTypingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
