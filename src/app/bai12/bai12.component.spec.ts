import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai12Component } from './bai12.component';

describe('Bai12Component', () => {
  let component: Bai12Component;
  let fixture: ComponentFixture<Bai12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bai12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
