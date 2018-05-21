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
        // localStorage.removeItem('foreign_user');
        this.userService.getAllUsers()
        .toPromise()
        .then((data) => {
            this.users = data;
        })
        .catch((err) => { console.log(err); });
    }

    goToUserProfile(user) {
        this.userService.getUserByUsername(user)
        .toPromise()
        .then((data) => {
           return  localStorage.setItem('foreign_user', JSON.stringify(user));
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
