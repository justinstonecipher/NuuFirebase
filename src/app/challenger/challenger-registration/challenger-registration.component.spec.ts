import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerRegistrationComponent } from './challenger-registration.component';

describe('ChallengerRegistrationComponent', () => {
  let component: ChallengerRegistrationComponent;
  let fixture: ComponentFixture<ChallengerRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
