import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginData: Object = {
        email: '',
        password: ''
    };
    constructor (private loginService: LoginService) {

    }

    submit(e) {
        e.preventDefault();
        console.log(e);
        this.loginService.submitLogin(this.loginData)
        .toPromise()
        .then((data) => { console.log(data); })
        .catch((err) => { console.log(err); });
    }
}
