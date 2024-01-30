import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManegerComponent } from './task-maneger.component';

describe('TaskManegerComponent', () => {
  let component: TaskManegerComponent;
  let fixture: ComponentFixture<TaskManegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskManegerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
