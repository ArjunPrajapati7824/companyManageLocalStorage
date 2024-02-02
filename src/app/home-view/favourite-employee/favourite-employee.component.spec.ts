import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteEmployeeComponent } from './favourite-employee.component';

describe('FavouriteEmployeeComponent', () => {
  let component: FavouriteEmployeeComponent;
  let fixture: ComponentFixture<FavouriteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
