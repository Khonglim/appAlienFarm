import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemsPage } from './report-problems.page';

describe('ReportProblemsPage', () => {
  let component: ReportProblemsPage;
  let fixture: ComponentFixture<ReportProblemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProblemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
