import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestsListComponent } from './labtests-list.component';

describe('LabtestsListComponent', () => {
  let component: LabtestsListComponent;
  let fixture: ComponentFixture<LabtestsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
