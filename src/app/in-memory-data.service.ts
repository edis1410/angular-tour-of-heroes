import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', age: 40, gender: 'Male' },
      { id: 13, name: 'Bombasto', age: 35, gender: 'Male' },
      { id: 14, name: 'Celeritas', age: 20, gender: 'Male'  },
      { id: 15, name: 'Magneta', age: 37, gender: 'Female'  },
      { id: 16, name: 'RubberMan', age: 31, gender: 'Male'  },
      { id: 17, name: 'Dynama', age: 23, gender: 'Female'  },
      { id: 18, name: 'Dr. IQ', age: 19, gender: 'Male'  },
      { id: 19, name: 'Magma', age: 23, gender: 'Female'  },
      { id: 20, name: 'Tornado', age: 35, gender: 'Male'  },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
