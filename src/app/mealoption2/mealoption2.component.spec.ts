import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mealoption2Component } from './mealoption2.component';

describe('Mealoption2Component', () => {
  let component: Mealoption2Component;
  let fixture: ComponentFixture<Mealoption2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mealoption2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mealoption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
