import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerSchedulesComponent } from './challenger-schedules.component';

describe('ChallengerSchedulesComponent', () => {
  let component: ChallengerSchedulesComponent;
  let fixture: ComponentFixture<ChallengerSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
