import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerResultsComponent } from './challenger-results.component';

describe('ChallengerResultsComponent', () => {
  let component: ChallengerResultsComponent;
  let fixture: ComponentFixture<ChallengerResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
