import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaccessoiresComponent } from './telaccessoires.component';

describe('TelaccessoiresComponent', () => {
  let component: TelaccessoiresComponent;
  let fixture: ComponentFixture<TelaccessoiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaccessoiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaccessoiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
