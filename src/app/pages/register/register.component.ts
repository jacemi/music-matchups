import { Component } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registrationData: Object = {
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location: '',
        age: 0
    };
    constructor (private accountService: AccountService) {

    }

    submit(event) {
        event.preventDefault();
        console.log(event);
        this.accountService.submitRegistration(this.registrationData)
        .toPromise()
        .then((data) => { console.log(data); })
        .catch((err) => { console.log(err); });
    }
}
