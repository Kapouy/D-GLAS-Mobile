import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCovidComponent } from './inscription-covid.component';

describe('InscriptionCovidComponent', () => {
  let component: InscriptionCovidComponent;
  let fixture: ComponentFixture<InscriptionCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
