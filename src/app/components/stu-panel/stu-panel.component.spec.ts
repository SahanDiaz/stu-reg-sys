import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuPanelComponent } from './stu-panel.component';

describe('StuPanelComponent', () => {
  let component: StuPanelComponent;
  let fixture: ComponentFixture<StuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
