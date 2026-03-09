import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryPredictComponent } from './salary-predict.component';

describe('SalaryPredictComponent', () => {
  let component: SalaryPredictComponent;
  let fixture: ComponentFixture<SalaryPredictComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryPredictComponent]
    });
    fixture = TestBed.createComponent(SalaryPredictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
