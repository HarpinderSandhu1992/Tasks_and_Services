import { Component } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TasksServiceService } from '../../services/tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // DEFINING A TASK OBJECT
  // NON - NULL ASSERTION OPERATOR
  tasks: Task[];

  // ACCEPT TASKS SERVICE
  constructor(private tasksService: TasksServiceService) {
    this.tasks = this.tasksService.getTasks();
  }
}
