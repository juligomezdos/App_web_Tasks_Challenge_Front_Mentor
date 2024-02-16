import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Task } from '../../../models/tasks.models'

@Component({
  selector: 'app-to-do-day',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-day.component.html',
  styleUrls: ['./to-do-day.component.scss']
})
export class ToDoDayComponent {

  darkMode: boolean = false;
  darkDay: string = '../../../assets/images/bg-desktop-light.jpg'

  toggleDarkTheme() {
    this.darkMode = !this.darkMode;
    this.darkDay = this.darkMode ? '../../../assets/images/bg-desktop-dark.jpg' : '../../../assets/images/bg-desktop-light.jpg';
  }

  tasks: Task[] = [
      {
        id: 1,
        description: "Tarea 1",
        completed: false,
      },
      {
        id: 2,
        description: "Tarea 2",
        completed: false,
      },
      {
        id: 3,
        description: "Tarea 3",
        completed: false,
      },
      {
        id: 4,
        description: "Tarea 4",
        completed: false,
      },
    ];

  newTaskDescription: string = '';

  newTask() {
    let nuevaTask = { // creamos una variable con todo lo que lleva la tarea
      id: this.tasks.length + 1, // Aumentamos una unidad a la longitad para crearle el id
      description: this.newTaskDescription, //la descripcion va a ser la que escriba en la nueva tarea
      completed: false, // el estado por defecto quedara en false "No realizada"
    };
    this.tasks.push(nuevaTask); // empujamos la tarea en el array
    this.newTaskDescription = ''; // volvemos a dejar el input vacio
  };

  // updateTaskStatus(task: any) {
  //   task.completed = !task.completed;
  // }

  deleteTask(index: number) {
    this.tasks.splice(index, 1) // eliminamos por medio de splice que pide el indice y la cantidad
  }

  // completedTask(task:any) {
  //     task.completed = true;
  // }

  // noCompleted(task: any) {
  //   task.completed = false;
  // }

}

