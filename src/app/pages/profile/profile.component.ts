import { Component } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { UserService } from '../../services/user.service';
import { SessionService } from '../../services/session.service';

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
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
    artistData: Object = {
        name: ''
    };

    constructor(private userService: UserService, private sessionService: SessionService, private artistService: ArtistService) {

        this.userService.getSessionUser()
        .toPromise()
        .then((data) => {
            console.log(data);
            this.user = data;
        })
        .catch((err) => {
            console.log(err); });
    }

    submitArtistEntry(event) {
        // event.preventDefaults();
        console.log(event);
        this.artistService.postNewArtist(this.artistData)
        .toPromise()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }
}
