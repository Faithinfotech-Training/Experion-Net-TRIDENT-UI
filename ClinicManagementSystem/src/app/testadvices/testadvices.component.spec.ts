import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestadvicesComponent } from './testadvices.component';

describe('TestadvicesComponent', () => {
  let component: TestadvicesComponent;
  let fixture: ComponentFixture<TestadvicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestadvicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestadvicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
