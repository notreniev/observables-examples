import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  search(text$: Observable<string>): Observable<string[]> {
    return text$.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      switchMap(searchTerm => {
        if (!searchTerm) {
          return [];
        }
        return this.getPosts(searchTerm);
      })
    );
  }

  getPosts(searchTerm: string): Observable<string[]> {
    return of([]);
  }

}
