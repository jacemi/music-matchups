import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './users_list.component.html',
    styleUrls: ['./users_list.component.scss']
})
export class UsersListComponent {
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
