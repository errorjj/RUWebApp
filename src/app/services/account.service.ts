import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  users: User[] = [];

  constructor() { }

  postUser (model: User) {
    this.users.push(model);
  }

  getUsers () {
    return this.users;
  }

}
