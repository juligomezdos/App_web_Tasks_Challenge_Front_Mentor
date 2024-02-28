import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/tasks.models';

@Component({
  selector: 'app-to-do-day',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-day.component.html',
  styleUrls: ['./to-do-day.component.scss']
})
export class ToDoDayComponent {

  @Output() darkModeChanged = new EventEmitter<boolean>();

  // ----------------------------------  PROPIEDADES ------------------------------------------
  darkMode: boolean = false;
  darkDay: string = '../../../assets/images/bg-desktop-light.jpg';
  darkNightIcon: string = '../../../assets/images/icon-moon.svg';

  toggleDarkTheme() {
    this.darkMode = !this.darkMode;
    this.darkDay = this.darkMode ? '../../../assets/images/bg-desktop-dark.jpg' : '../../../assets/images/bg-desktop-light.jpg';
    this.darkNightIcon = this.darkMode ? '../../../assets/images/icon-sun.svg' : '../../../assets/images/icon-moon.svg';
    this.darkModeChanged.emit(this.darkMode);
  }

  tasks: Task[] = [
      {
        id: 1,
        description: "Completed online javaScript course",
        completed: false,
        check: false,
        deleteIconTask: false,
      },
      {
        id: 2,
        description: "Jog around the park 3x",
        completed: false,
        check: false,
        deleteIconTask: false,
      },
      {
        id: 3,
        description: "10 minures meditation",
        completed: false,
        check: false,
        deleteIconTask: false,
      },
      {
        id: 4,
        description: "Read for 1 hour",
        completed: false,
        check: false,
        deleteIconTask: false,
      },
    ];

  newTaskDescription: string = '';

// ----------------------------------  MÉTODOS ------------------------------------------

  newTask() {
    let nuevaTask = { // creamos una variable con todo lo que lleva la tarea
      id: this.tasks.length + 1, // Aumentamos una unidad a la longitad para crearle el id
      description: this.newTaskDescription, //la descripcion va a ser la que escriba en la nueva tarea
      completed: false, // el estado por defecto quedara en false "No realizada"
      check: false,
      deleteIconTask: false,
    };
    this.tasks.push(nuevaTask); // empujamos la tarea en el array
    this.newTaskDescription = ''; // volvemos a dejar el input vacio
  };

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // eliminamos por medio de splice que pide el indice y la cantidad
  };

  selectAll() {
    this.tasks.forEach(task => task.check = true); // colocamos en true todas la tareas
  };

  taskActive() {
    this.tasks = this.tasks.filter(task => !task.completed); // muestra solo las tareas que estan activas
  };

  taskCompleted() {
    this.tasks.forEach(task => {  // generamos un bucle que recorra todo el array de tareas
      if(task.check === true) {   // creamos la condicion que solo funcione si check es true
        task.completed = true;    // le decimos que lo que debe de hacer es que las task pasen a true
      }
      task.check = false;         // Dejamos el check como estaba
    });
  };

  deleteTaskCompleted() {
    this.tasks = this.tasks.filter(task => !task.completed); // mostramos las tasks que no estan completas
  };

  showDeleteButton(index: number) {
    this.tasks[index].deleteIconTask = true;
  }

  hideDeleteButton(index: number) {
    this.tasks[index].deleteIconTask = false;
  }
}


