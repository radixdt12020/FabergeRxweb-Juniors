import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StronglyTypesComponent } from './strongly-types.component';

describe('StronglyTypesComponent', () => {
  let component: StronglyTypesComponent;
  let fixture: ComponentFixture<StronglyTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StronglyTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StronglyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
