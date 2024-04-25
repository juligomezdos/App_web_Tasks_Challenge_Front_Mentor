import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  urlApi = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  loginUser(nombre: string, contraseña: string){
    return this.http.post(`${this.urlApi}/login`, { // como es un post, debemos de colocar como segundo parametro el email y la contraseña asi:
      nombre,
      contraseña
    });
  }

  sigInUser(nombre: string, contraseña:string) {
    return this.http.post(`${this.urlApi}/register`, {
      nombre,
      contraseña
    })
  }
}
