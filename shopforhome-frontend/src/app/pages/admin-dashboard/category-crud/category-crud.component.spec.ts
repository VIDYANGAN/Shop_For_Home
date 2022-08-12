import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCRUDComponent } from './category-crud.component';

describe('CategoryCRUDComponent', () => {
  let component: CategoryCRUDComponent;
  let fixture: ComponentFixture<CategoryCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
