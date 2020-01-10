import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandevuPage } from './randevu.page';

describe('RandevuPage', () => {
  let component: RandevuPage;
  let fixture: ComponentFixture<RandevuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandevuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandevuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
