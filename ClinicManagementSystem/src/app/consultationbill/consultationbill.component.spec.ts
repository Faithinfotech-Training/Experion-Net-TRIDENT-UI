import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationbillComponent } from './consultationbill.component';

describe('ConsultationbillComponent', () => {
  let component: ConsultationbillComponent;
  let fixture: ComponentFixture<ConsultationbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
