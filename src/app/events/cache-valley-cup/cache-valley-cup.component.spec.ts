import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheValleyCupComponent } from './cache-valley-cup.component';

describe('CacheValleyCupComponent', () => {
  let component: CacheValleyCupComponent;
  let fixture: ComponentFixture<CacheValleyCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CacheValleyCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CacheValleyCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
