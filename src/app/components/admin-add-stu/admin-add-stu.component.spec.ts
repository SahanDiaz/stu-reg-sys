import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStuComponent } from './admin-add-stu.component';

describe('AdminAddStuComponent', () => {
  let component: AdminAddStuComponent;
  let fixture: ComponentFixture<AdminAddStuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddStuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
