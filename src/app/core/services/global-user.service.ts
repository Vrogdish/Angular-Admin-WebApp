import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { users } from '../mocks/mock-users';
import { GlobalUserInterface } from '../interfaces/global-user.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalUserService {
  constructor() {}

  getAllUsers(): Observable<GlobalUserInterface[]> {
    return of(users);
  }

  getUserById(id: string): Observable<GlobalUserInterface | undefined> {

    return new Observable((observer) =>
      observer.next(users.find((user) => user.id === id))
    );
  }

  deleteUser(id: string) {
    alert(`Sorry, impossible to delete user : ${id} in this demo`);
  }
}
