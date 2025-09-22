import { ComponentFixture, TestBed } from '@angular/core/testing';

import { G2048 } from './g2048';

describe('G2048', () => {
  let component: G2048;
  let fixture: ComponentFixture<G2048>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [G2048]
    })
    .compileComponents();

    fixture = TestBed.createComponent(G2048);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
