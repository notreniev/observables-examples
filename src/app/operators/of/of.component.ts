import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { from, Observable, of } from 'rxjs';
import { Person } from '../../core/models/person.model';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const person: Person = {
      id: '1345678',
      name: 'Everton'
    }

    const personObs: Observable<Person> = of(person);
    const personPromise: Promise<Person> = Promise.resolve(person);
    const personPromiseToObs: Observable<Person> = from(personPromise);

    personObs.subscribe(data => console.log(data));
    personPromiseToObs.subscribe(data => console.log(data));
  }

}
