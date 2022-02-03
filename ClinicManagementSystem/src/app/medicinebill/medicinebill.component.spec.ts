import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinebillComponent } from './medicinebill.component';

describe('MedicinebillComponent', () => {
  let component: MedicinebillComponent;
  let fixture: ComponentFixture<MedicinebillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinebillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinebillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
