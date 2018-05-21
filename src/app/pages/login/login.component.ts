import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginData: Object = {
        email: '',
        password: ''
    };
    constructor (private sessionService: SessionService) {

    }

    logUserIn(event) {
        event.preventDefault();
        console.log(event);
        this.sessionService.login(this.loginData)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => { console.log(err); });
    }
}
