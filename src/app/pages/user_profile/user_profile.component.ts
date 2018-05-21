import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './user_profile.component.html',
    styleUrls: ['./user_profile.component.scss']
})
export class UserProfileComponent {
    title: string;
    user: Object = {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        location: '',
        age: 0,
        profile_picture: '',
        created_at: '',
        favoriteArtists: [],
        favoriteTags: [],
        posts: [],
        comments: []
    };
    constructor(private userService: UserService, private sessionService: SessionService, private router: Router) {
        const foreign_user = JSON.parse(localStorage.getItem('foreign_user'));
        this.userService.getUserByUsername(foreign_user)
            .toPromise()
            .then((data) => {
                console.log(data);
                this.user = data;
            })
            .catch((err) => {
                console.log(err);
            });
        // }

    }
