import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mealoption1Component } from './mealoption1.component';

describe('Mealoption1Component', () => {
  let component: Mealoption1Component;
  let fixture: ComponentFixture<Mealoption1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealoption1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mealoption1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
