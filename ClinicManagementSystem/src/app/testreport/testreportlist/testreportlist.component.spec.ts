import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestreportlistComponent } from './testreportlist.component';

describe('TestreportlistComponent', () => {
  let component: TestreportlistComponent;
  let fixture: ComponentFixture<TestreportlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestreportlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestreportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
