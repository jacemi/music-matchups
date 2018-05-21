import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private http: HttpClient) { }

    submitLogin(data) {
        return this.http.post('/api/login', data);
    }

    submitLogout() {
        return this.http.get('/api/logout');
    }

    submitRegistration(data) {
        return this.http.post('/api/register', data);
    }
}
