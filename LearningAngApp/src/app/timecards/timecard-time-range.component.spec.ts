import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardTimeRangeComponent } from './timecard-time-range.component';

describe('TimecardTimeRangeComponent', () => {
  let component: TimecardTimeRangeComponent;
  let fixture: ComponentFixture<TimecardTimeRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardTimeRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardTimeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
