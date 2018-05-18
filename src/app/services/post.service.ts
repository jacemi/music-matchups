import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) { }

    submitPost(data) {
        return this.http.post('/api/posts', data);
    }
}