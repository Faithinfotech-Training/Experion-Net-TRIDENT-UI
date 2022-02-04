import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionsViewComponent } from './prescriptions-view.component';

describe('PrescriptionsViewComponent', () => {
  let component: PrescriptionsViewComponent;
  let fixture: ComponentFixture<PrescriptionsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
