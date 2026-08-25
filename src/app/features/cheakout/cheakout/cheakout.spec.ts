import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheakout } from './cheakout';

describe('Cheakout', () => {
  let component: Cheakout;
  let fixture: ComponentFixture<Cheakout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cheakout],
    }).compileComponents();

    fixture = TestBed.createComponent(Cheakout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
