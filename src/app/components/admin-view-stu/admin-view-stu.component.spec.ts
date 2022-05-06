import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewStuComponent } from './admin-view-stu.component';

describe('AdminViewStuComponent', () => {
  let component: AdminViewStuComponent;
  let fixture: ComponentFixture<AdminViewStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
