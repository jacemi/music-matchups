import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    constructor (private sessionService: SessionService) {
    
    }
    
    logout(){
        this.sessionService.logout()
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    
};