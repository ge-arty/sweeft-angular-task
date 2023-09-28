import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { USERS } from '../data/USERS';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];
  constructor() {
    this.users = USERS;
  }

  getUsers(start: number, end: number): Observable<User[]> {
    const sliced = this.users.slice(start, end);
    return of(sliced);
  }

  getFriendsByUserId(
    userId: number,
    start: number,
    end: number
  ): Observable<User[]> {
    const foundUser = this.users.find((u) => u.id === userId);

    const friends = foundUser!.friends
      .map((friendId) => this.users.find((u) => u.id == friendId))
      .slice(start, end);

    return of(friends as User[]);
  }

  getUserById(id: number): Observable<User> {
    const user = USERS.find((u) => u.id === id);
    return of(user as User);
  }

  getUsersByIds(ids: number[]): User[] {
    const matchingUsers: User[] = [];
    ids.forEach((id) => {
      const user = this.users.find((u) => u.id === id);
      if (user) {
        matchingUsers.push(user);
      }
    });
    return matchingUsers;
  }
}
