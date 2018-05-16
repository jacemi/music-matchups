import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    title: string;
    bands: Object[];

    constructor() {
        this.title = 'app' || '';

        this.bands = [
            { name: 'Linkin Park', current: false },
            { name: 'The Beatles', current: false },
            { name: 'Pink Floyd', current: false },
            { name: 'Foo Fighters', current: true },
            { name: 'motmot', current: true }
        ];
    }
}