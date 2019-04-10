import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProductViewerComponent } from '../../components/small-product-viewer.component';

describe('SmallProductViewerComponent', () => {
  let component: SmallProductViewerComponent;
  let fixture: ComponentFixture<SmallProductViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallProductViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProductViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
