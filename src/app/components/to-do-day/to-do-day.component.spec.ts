import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDayComponent } from './to-do-day.component';

describe('ToDoDayComponent', () => {
  let component: ToDoDayComponent;
  let fixture: ComponentFixture<ToDoDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoDayComponent]
    });
    fixture = TestBed.createComponent(ToDoDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
