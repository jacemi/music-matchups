import { Injectable } from '@angular/core';
import { AccountService } from './account.service';
// import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SessionService {
    isLoggedIn: boolean;
    user: Object;
    constructor(private accountService: AccountService) {
        this.isLoggedIn = false;
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    register(data) {
        return this.accountService
            .submitRegistration(data)
            .toPromise()
            .then(user => {
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
                return (this.isLoggedIn = true);
            })
            .catch(err => {
                console.log(err);
                return (this.isLoggedIn = false);
            });
    }

    login(data) {
        return this.accountService
            .submitLogin(data)
            .toPromise()
            .then(user => {
                console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
                return (this.isLoggedIn = true);
            })
            .catch(err => {
                console.log(err);
                return (this.isLoggedIn = false);
            });
    }

    logout() {
        return this.accountService
            .submitLogout()
            .toPromise()
            .then(data => {
                localStorage.removeItem('user');
                return (this.isLoggedIn = false);
            })
            .catch(err => {
                console.log(err);
                return (this.isLoggedIn = false);
            });
    }

    getUserInfo() {
        return this.user;
    }

}
