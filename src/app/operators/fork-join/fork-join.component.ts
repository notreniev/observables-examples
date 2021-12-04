import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Post } from '../../core/models/post.model';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const postObs = this.getPosts();
    const commentsObs = this.getComments();

    const sources = [postObs, commentsObs];
    const combined = forkJoin(sources);
    combined.subscribe(data => console.log(data));
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }

}
