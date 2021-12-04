import { Component, OnInit } from '@angular/core';
import { concat, Observable, of } from 'rxjs';

export class Color {name: string = ''};
export class Driver {name: string = ''};
export class Car {driver: Driver = new Driver(); color: Color = new Color()};

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const carColorObs: Observable<Color> = this.getColor();
    const carDriverObs: Observable<Driver> = this.getDriver();

    const combinedObs = concat(carColorObs, carDriverObs);

    combinedObs.subscribe(data => console.log(data));
  }

  getColor():Observable<Color>{
    return of(Color);
  }
  getDriver():Observable<Driver>{
    return of(Driver);
  }

}
