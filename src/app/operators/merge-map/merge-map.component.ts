import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, of } from 'rxjs';

export class Color {name: string = ''};
export class Driver {name: string = ''};
export class Car {driver: Driver = new Driver(); color: Color = new Color()};

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const carColorObs: Observable<Color> = this.getColor();
    const carDriverObs: Observable<Driver> = this.getDriver();

    const carObs: Observable<Car> = carColorObs.pipe(
      mergeMap(color => {
        return carDriverObs.pipe(
          map(driver => {
            const car: Car = {
              driver: driver,
              color: color
            };
            return car;
          })
        );
      })
    );

    carObs.subscribe(data => console.log(data));
  }

  getColor():Observable<Color>{
    return of(Color);
  }
  getDriver():Observable<Driver>{
    return of(Driver);
  }
}
