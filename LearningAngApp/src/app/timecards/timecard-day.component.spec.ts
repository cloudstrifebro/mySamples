import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardDayComponent } from './timecard-day.component';

describe('TimecardDayComponent', () => {
  let component: TimecardDayComponent;
  let fixture: ComponentFixture<TimecardDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
