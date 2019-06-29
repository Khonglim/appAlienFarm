import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSchoolPage } from './contact-school.page';

describe('ContactSchoolPage', () => {
  let component: ContactSchoolPage;
  let fixture: ComponentFixture<ContactSchoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSchoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSchoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
