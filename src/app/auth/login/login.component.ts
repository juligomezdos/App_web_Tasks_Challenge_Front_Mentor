
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule]

})
export class LoginComponent {

myForm: FormGroup;

constructor(
  private formBuilder: FormBuilder,
  private authService: AuthService,
  private routes: Router

) {

  this.myForm = this.formBuilder.group({
    nombre: '',
    contraseña: ''
  });
}

login() {
  if (this.myForm.valid) {
    const { nombre, contraseña } = this.myForm.value;
    this.authService.loginUser(nombre, contraseña).subscribe({
      next: () => {
        this.routes.navigate(['/to-do-day']);
        console.log("login Exitoso");
      },
      error: () => {
        console.log("error durante login");
      }
    })
    console.log(this.myForm.value);
  }
}
}


