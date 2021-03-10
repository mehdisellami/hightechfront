import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleusbComponent } from './cleusb.component';

describe('CleusbComponent', () => {
  let component: CleusbComponent;
  let fixture: ComponentFixture<CleusbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleusbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleusbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
