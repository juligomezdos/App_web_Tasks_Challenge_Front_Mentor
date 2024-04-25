import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-sig-in',
  templateUrl: './sig-in.component.html',
  styleUrls: ['./sig-in.component.scss'],
  imports: [ReactiveFormsModule]
})
export class SigInComponent {

myFormSigIn: FormGroup;

constructor(

  private formBuilder: FormBuilder,
  private authService: AuthService

) {
  this.myFormSigIn = this.formBuilder.group({
    nombre: '',
    contraseña: ''
  });
}

sigIn() {
  if(this.myFormSigIn.valid) {
    const { nombre, contraseña } = this.myFormSigIn.value;
    this.authService.sigInUser(nombre, contraseña).subscribe({
      next: () => {
        console.log("Usuario registrado correctamente");
      },
      error: () => {

        console.log("No se pudo registrar el usuario");
      }
    })
  }
}
}
