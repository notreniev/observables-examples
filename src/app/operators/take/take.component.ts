import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, first, fromEvent, Observable, of, Subject, switchMap, takeLast, takeUntil, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {
  onStop = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    let counter = 0;
    const source = fromEvent(document, 'click');
    source
      .pipe(takeWhile(() => counter < 3))
      .subscribe(() => {
        console.log('clicked on document');
        counter++;
      });

    const source2 = fromEvent(document, 'click');
    source2
      .pipe(takeLast(2))
      .subscribe((value) => {
        console.log('clicked on document', value);
        counter++;
      });

    const source3 = fromEvent(document, 'click');
    source3
      .pipe(takeUntil(this.onStop))
      .subscribe((value) => {
        console.log('clicked on document', value);
        counter++;
      });

  }

  stop() {
    this.onStop.next();
    this.onStop.complete();
  }

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
