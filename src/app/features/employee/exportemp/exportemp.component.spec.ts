import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportempComponent } from './exportemp.component';

describe('ExportempComponent', () => {
  let component: ExportempComponent;
  let fixture: ComponentFixture<ExportempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExportempComponent]
    });
    fixture = TestBed.createComponent(ExportempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
