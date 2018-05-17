import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title: string;
    users;

    constructor(private userService: UserService) {
        this.userService.getAllUsers()
        .toPromise()
        .then((data) => {
            console.log(data);
            this.users = data;
        })
        .catch((err) => { console.log(err); });
    }
}
