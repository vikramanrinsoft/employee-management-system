import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username && password) {
      this.router.navigate(['/verify']);
      localStorage.setItem('token', 'fake-jwt-token');
      return of(true);
    }
    return of(false);
  }

  verify(token: string) {
    if (token) {
      localStorage.setItem('token', 'fake-jwt-token');
      this.router.navigate(['/employees']);
      return of(true);
    }
    return of(false);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
