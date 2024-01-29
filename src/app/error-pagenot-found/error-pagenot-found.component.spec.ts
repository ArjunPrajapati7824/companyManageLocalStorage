import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPagenotFoundComponent } from './error-pagenot-found.component';

describe('ErrorPagenotFoundComponent', () => {
  let component: ErrorPagenotFoundComponent;
  let fixture: ComponentFixture<ErrorPagenotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPagenotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPagenotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
