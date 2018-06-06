import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardRuleComponent } from './timecard-rule.component';

describe('TimecardRuleComponent', () => {
  let component: TimecardRuleComponent;
  let fixture: ComponentFixture<TimecardRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimecardRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
