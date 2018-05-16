import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    registerData: Object = {
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        location: '',
        age: 0
    };
    constructor (private registerService: RegisterService) {

    }

    submit(e) {
        e.preventDefault();
        console.log(e);
        this.registerService.submitRegistration(this.registerData)
        .toPromise()
        .then((data) => { console.log(data); })
        .catch((err) => { console.log(err); });
    }
}