import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelfixeComponent } from './telfixe.component';

describe('TelfixeComponent', () => {
  let component: TelfixeComponent;
  let fixture: ComponentFixture<TelfixeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelfixeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelfixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
