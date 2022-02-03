import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestadviceListComponent } from './testadvice-list.component';

describe('TestadviceListComponent', () => {
  let component: TestadviceListComponent;
  let fixture: ComponentFixture<TestadviceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestadviceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestadviceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
