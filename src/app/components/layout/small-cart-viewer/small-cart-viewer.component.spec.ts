import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCartViewerComponent } from './small-cart-viewer.component';

describe('SmallCartViewerComponent', () => {
  let component: SmallCartViewerComponent;
  let fixture: ComponentFixture<SmallCartViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallCartViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCartViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
