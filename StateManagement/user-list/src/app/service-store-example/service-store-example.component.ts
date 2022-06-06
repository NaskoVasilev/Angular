import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserListStoreService } from '../services/user-list-store.service';

@Component({
  selector: 'app-service-store-example',
  templateUrl: './service-store-example.component.html',
  styleUrls: ['./service-store-example.component.sass']
})
export class ServiceStoreExampleComponent {
  users$: Observable<string[]>;

  constructor(private userStore: UserListStoreService) { 
    this.users$ = userStore.allUsers();
  }

  public addNewUser(nameInput: HTMLInputElement) {
    this.userStore.addUser(nameInput.value);
    nameInput.value = '';
  }

}
