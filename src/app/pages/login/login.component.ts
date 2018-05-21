import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginData: Object = {
        email: '',
        password: ''
    };
    constructor (private accountService: AccountService) {

    }

    logUserIn(event) {
        event.preventDefault();
        console.log(event);
        this.accountService.submitLogin(this.loginData)
        .toPromise()
        .then((data) => { 
            console.log(data);
        })
        .catch((err) => { console.log(err); });
    }
}
