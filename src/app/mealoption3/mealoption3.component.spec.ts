import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mealoption3Component } from './mealoption3.component';

describe('Mealoption3Component', () => {
  let component: Mealoption3Component;
  let fixture: ComponentFixture<Mealoption3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealoption3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mealoption3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
