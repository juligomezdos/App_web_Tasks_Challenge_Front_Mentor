import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ToDoDayComponent } from './components/to-do-day/to-do-day.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { SigInComponent } from './auth/sig-in/sig-in.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ToDoDayComponent, FormsModule, LoginComponent, SigInComponent, RouterOutlet, RouterLink, HttpClientModule]
})

export class AppComponent {
  //@ViewChild(ToDoDayComponent) hijo!: ToDoDayComponent;

  handleDarkModeChange(darkMode: boolean) {
     //Manejar el cambio de modo oscuro aquí en el componente padre
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

}
