import { Component } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  public text: String = "zakupy"
  public tasks: Array<String> = []

  constructor(
    private tasksService: TasksService
  ) {}
  
  public addTask(): void {
    this.tasks.push(this.text)
    this.text = ""
    this.tasksService.saveTasks(this.tasks)
  }

  public removeTask(i): void {
    this.tasks.splice(i,1)
    this.tasksService.saveTasks(this.tasks)
  }

  private ngOnInit() {
    this.tasks = this.tasksService.fetchTasks()
  }
}
