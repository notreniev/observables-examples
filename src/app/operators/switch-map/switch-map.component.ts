import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, pipe, tap } from 'rxjs';
import { Post } from '../../core/models/post.model';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const postObs = this.getPosts();
    const commentsObs = this.getComments();

    const combined = postObs.pipe(
      switchMap(posts => {
        return commentsObs
          .pipe(
            tap(comments => {
              console.log(comments);
              console.log(posts);
            }))
      }));

    combined.subscribe();
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
