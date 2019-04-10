import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceMultiplierComponent } from './price-multiplier.component';

describe('PriceMultiplierComponent', () => {
  let component: PriceMultiplierComponent;
  let fixture: ComponentFixture<PriceMultiplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceMultiplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
