import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs';
import { users } from '../mocks/mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return new Observable((observer) => observer.next(users));
  }

  deleteUser(id: string) {
    alert(`Sorry, impossible to delete user : ${id} in this demo`);
  }
}
