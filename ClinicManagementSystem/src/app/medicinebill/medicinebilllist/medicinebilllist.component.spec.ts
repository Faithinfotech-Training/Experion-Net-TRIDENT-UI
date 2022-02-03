import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinebilllistComponent } from './medicinebilllist.component';

describe('MedicinebilllistComponent', () => {
  let component: MedicinebilllistComponent;
  let fixture: ComponentFixture<MedicinebilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinebilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinebilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
