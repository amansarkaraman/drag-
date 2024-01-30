import { Component } from '@angular/core';

@Component({
  selector: 'app-task-maneger',
  standalone: true,
  imports: [],
  templateUrl: './task-maneger.component.html',
  styleUrl: './task-maneger.component.css',
})
export class TaskManegerComponent {
  tasks: any[] = [
    { name: 'Task 1', completed: false, id: 1 },
    { name: 'Task 2', completed: false, id: 2 },
    { name: 'Task 3', completed: false, id: 3 },
    { name: 'Task 4', completed: false, id: 4 },
    { name: 'Task 5', completed: false, id: 5 },
    { name: 'Task 6', completed: false, id: 6 },
  ];

  targrtElement?: any;
  OnTaskDragStart(event: any) {
    this.targrtElement = event.target;
  }
  OnTaskDragOver(event: any) {
    event.preventDfault();
  }
  OnTaskDrop(event: any) {
    event.preventDefault();

    const targetTask = event.target;
    const textOfTargetTask = targetTask.innerText;
    const textofSourceTask = this.targrtElement.innerText;

    targetTask.innerText = textofSourceTask;
    this.targrtElement.innerText = textOfTargetTask;
  }
}
