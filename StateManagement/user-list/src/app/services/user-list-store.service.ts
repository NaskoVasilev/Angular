import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListStoreService {
  private users: string[] = [ 'Nasko', 'Vasko' ];
  private userList = new BehaviorSubject<string[]>([]);

  constructor() {
    this.userList.next(this.users);
   }

  public allUsers(): Observable<string[]> {
    return this.userList.asObservable();
  }

  public addUser(user: string) {
    this.users = [...this.users, user];
    this.userList.next(this.users);
  }
}
