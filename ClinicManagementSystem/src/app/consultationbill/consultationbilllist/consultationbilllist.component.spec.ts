import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationbilllistComponent } from './consultationbilllist.component';

describe('ConsultationbilllistComponent', () => {
  let component: ConsultationbilllistComponent;
  let fixture: ComponentFixture<ConsultationbilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationbilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationbilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
