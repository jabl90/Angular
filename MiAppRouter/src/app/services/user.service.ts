import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios:User[]=[
    new User(1, 'pepe', 'j@gmail.com', 27),
    new User(2, 'sergio', 'antigoogle@gmail.com', 28),
    new User(3, 'peter', 'spiderman@gmail.com', 25),
    new User(3, 'david', 'dvd@gmail.com', 24),
  ];

  constructor() { }

  getUsuarios():User[]{
    return this._usuarios;
  }
}
