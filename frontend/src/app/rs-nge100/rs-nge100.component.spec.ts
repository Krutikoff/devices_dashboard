import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsNge100Component } from './rs-nge100.component';

describe('RsNge100Component', () => {
  let component: RsNge100Component;
  let fixture: ComponentFixture<RsNge100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RsNge100Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RsNge100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
