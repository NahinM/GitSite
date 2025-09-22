import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nopage } from './nopage';

describe('Nopage', () => {
  let component: Nopage;
  let fixture: ComponentFixture<Nopage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nopage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nopage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
