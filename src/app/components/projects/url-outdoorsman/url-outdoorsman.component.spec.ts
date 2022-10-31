import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlOutdoorsmanComponent } from './url-outdoorsman.component';

describe('UrlOutdoorsmanComponent', () => {
  let component: UrlOutdoorsmanComponent;
  let fixture: ComponentFixture<UrlOutdoorsmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlOutdoorsmanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlOutdoorsmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
