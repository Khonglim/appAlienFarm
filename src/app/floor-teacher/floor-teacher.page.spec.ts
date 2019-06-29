import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorTeacherPage } from './floor-teacher.page';

describe('FloorTeacherPage', () => {
  let component: FloorTeacherPage;
  let fixture: ComponentFixture<FloorTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
