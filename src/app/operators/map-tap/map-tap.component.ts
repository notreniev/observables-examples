import { Component, OnInit } from '@angular/core';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-map-tap',
  templateUrl: './map-tap.component.html',
  styleUrls: ['./map-tap.component.scss']
})
export class MapTapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const source = of('Everton');

    source.
      pipe(
        map(name => name.toLocaleUpperCase())
      ).subscribe(data => console.log(data));

    source.
      pipe(
        tap(name => console.log(name))
      )
      .subscribe(data => console.log(data));

  }

}
