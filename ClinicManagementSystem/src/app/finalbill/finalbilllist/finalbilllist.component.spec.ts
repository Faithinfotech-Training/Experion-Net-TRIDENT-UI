import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalbilllistComponent } from './finalbilllist.component';

describe('FinalbilllistComponent', () => {
  let component: FinalbilllistComponent;
  let fixture: ComponentFixture<FinalbilllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalbilllistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalbilllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
