import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    postData: Object = {
        content: ''
    };
    constructor (private postService: PostService) {

    }

    submit(e) {
        e.preventDefault();
        console.log(e);
        this.postService.submitPost(this.postData)
        .toPromise()
        .then((data) => { console.log(data); })
        .catch((err) => { console.log(err); });
    }
}
