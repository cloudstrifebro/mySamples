import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardDetailComponent } from './timecard-detail.component';

describe('TimecardDetailComponent', () => {
  let component: TimecardDetailComponent;
  let fixture: ComponentFixture<TimecardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
