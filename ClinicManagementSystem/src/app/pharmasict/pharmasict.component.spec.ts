import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmasictComponent } from './pharmasict.component';

describe('PharmasictComponent', () => {
  let component: PharmasictComponent;
  let fixture: ComponentFixture<PharmasictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmasictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmasictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
