import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessWarningComponent } from './success-warning.component';

describe('SuccessWarningComponent', () => {
  let component: SuccessWarningComponent;
  let fixture: ComponentFixture<SuccessWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessWarningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
