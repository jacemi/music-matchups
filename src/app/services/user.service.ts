import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('/api/users');
  }

  getSessionUser() {
    return this.http.get('/api/users/profile');
  }

  getUserById(data) {
    return this.http.get('/api/users/:id', data);
  }

  getMatchedUsers() {
    return this.http.get('/api/users/match')
  }

}
