import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCupComponent } from './mini-cup.component';

describe('MiniCupComponent', () => {
  let component: MiniCupComponent;
  let fixture: ComponentFixture<MiniCupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
