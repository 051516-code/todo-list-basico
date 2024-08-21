import { Component } from '@angular/core';

interface Task {
  name: String;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  newTask : string = '';
  tasks : Task[] = [];

  constructor() {}

  addTask() {
    if(this.newTask.trim().length > 0){
      this.tasks.push({name: this.newTask, completed: false});

      this.newTask = '';
    }

  }

  deleteTask(task : Task){
    this.tasks = this.tasks.filter(t => t !==task);
  }

}
