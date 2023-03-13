import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai11Component } from './bai11.component';

describe('Bai11Component', () => {
  let component: Bai11Component;
  let fixture: ComponentFixture<Bai11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
