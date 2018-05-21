import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ArtistService {
    constructor(private http: HttpClient) { }

    getAllArtists() {
        return this.http.get('/api/favoriteArtists');
    }

    getSessionArtists(data) {
        return this.http.get('/api/favoriteArtists/profile', data);
    }

    getArtistById(data) {
        return this.http.get('/api/favoriteArtists/:id', data);
    }

    postNewArtist(data) {
        return this.http.post('/api/favoriteArtists', data);
    }

    putArtistById(data) {
        return this.http.get('/api/favoriteArtists/:id');
    }

    deleteArtistById(data) {
        return this.http.delete('/api/favoriteArtists');
    }
}
