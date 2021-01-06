import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxGridComponent } from './rx-grid.component';

describe('RxGridComponent', () => {
  let component: RxGridComponent;
  let fixture: ComponentFixture<RxGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
