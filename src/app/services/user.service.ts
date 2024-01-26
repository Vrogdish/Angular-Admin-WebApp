import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { users } from '../../mocks/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers () : Observable<User[]> {
    return new Observable(observer => observer.next(users))
  }
}
