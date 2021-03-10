import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisquedurComponent } from './disquedur.component';

describe('DisquedurComponent', () => {
  let component: DisquedurComponent;
  let fixture: ComponentFixture<DisquedurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisquedurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisquedurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
