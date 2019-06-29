import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRelationsPage } from './public-relations.page';

describe('PublicRelationsPage', () => {
  let component: PublicRelationsPage;
  let fixture: ComponentFixture<PublicRelationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicRelationsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicRelationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
