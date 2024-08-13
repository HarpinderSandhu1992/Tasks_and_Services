import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  tasks: Task[] = [
    {
      title: 'Task One',
      description: 'This is task one',
      priority_level: 'High',
      category: 'Work',
      date: '06-05-2024',
      time: '12:00',
      progress_level: 'Not Started',
    },
    {
      title: 'Task Two',
      description: 'This is task Two',
      priority_level: 'Low',
      category: 'Work',
      date: '06-09-2024',
      time: '12:00',
      progress_level: 'Not Started',
    },
  ];
  constructor() {}

  getTasks() {
    // GET DATA FROM AN api USING HTTP CLIENT
    return this.tasks;
  }
}
