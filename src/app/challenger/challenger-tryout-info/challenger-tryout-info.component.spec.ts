import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerTryoutInfoComponent } from './challenger-tryout-info.component';

describe('ChallengerTryoutInfoComponent', () => {
  let component: ChallengerTryoutInfoComponent;
  let fixture: ComponentFixture<ChallengerTryoutInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerTryoutInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerTryoutInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
