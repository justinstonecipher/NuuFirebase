import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerTryoutFormComponent } from './challenger-tryout-form.component';

describe('ChallengerTryoutFormComponent', () => {
  let component: ChallengerTryoutFormComponent;
  let fixture: ComponentFixture<ChallengerTryoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerTryoutFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerTryoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
