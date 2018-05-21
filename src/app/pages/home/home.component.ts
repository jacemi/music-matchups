import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title: string;
    users;
    user;

    constructor(private userService: UserService) {
        // localStorage.removeItem('foreign_user');
        this.userService.getMatchedUsers()
            .toPromise()
            .then((data) => {
                console.log(data);
                this.users = data;
            })
            .catch((err) => { console.log(err); });
    }

    goToUserProfile(user) {
        this.userService.getUserByUsername(user)
            .toPromise()
            .then((data) => {
                console.log(data);
                return localStorage.setItem('foreign_user', JSON.stringify(user));
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
