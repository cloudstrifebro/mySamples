import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendowrapperComponent } from './kendowrapper.component';

describe('KendowrapperComponent', () => {
  let component: KendowrapperComponent;
  let fixture: ComponentFixture<KendowrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendowrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendowrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
