import { Component, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';
import { Post } from '../../core/models/post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {
  private loading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const request = this.getPosts();
    this.setLoadingSpinner(request);

    request.subscribe(data => {
      console.log(data);
    });
  }

  setLoadingSpinner(observable: Observable<any>) {
    this.loading = true;
    observable.subscribe(() => this.loading = false);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(share());
  }

}
