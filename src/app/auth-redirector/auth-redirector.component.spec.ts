import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRedirectorComponent } from './auth-redirector.component';

describe('AuthRedirectorComponent', () => {
  let component: AuthRedirectorComponent;
  let fixture: ComponentFixture<AuthRedirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthRedirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRedirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
