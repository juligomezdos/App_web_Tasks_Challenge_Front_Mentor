import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SigInComponent } from './auth/sig-in/sig-in.component';
import { Component } from '@angular/core';
import { ToDoDayComponent } from './components/to-do-day/to-do-day.component';

export const routes: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: 'to-do-day', component: ToDoDayComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sigIn', component: SigInComponent}
];
