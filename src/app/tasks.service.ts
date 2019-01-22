import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {}

  public saveTasks(tasks: Array<String>): void {
    localStorage.setItem("tasksList", JSON.stringify(tasks))
  }

  public fetchTasks(): Array<String> {
    let data = JSON.parse(localStorage.getItem("tasksList"))
    return data ? data : []
  }

  
}
