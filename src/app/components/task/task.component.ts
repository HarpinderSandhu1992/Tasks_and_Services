import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  // DEFINE A TASK OBJECT
  // NON - NULL ASSERTAION OPERATOR
  @Input() task!: Task;
}

