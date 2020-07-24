import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    // se deberia guardar en cookies
    localStorage.setItem('token', token);
  }

  getTocken() {
    return localStorage.getItem('token');

  }
}
