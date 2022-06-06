import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { GenericAction } from 'src/app/store/actions/generic.action';
import { USER_ACTIONS } from 'src/app/store/actions/user-actions';
import { ApplicationState } from 'src/app/store/application-state';
import { selectUsersList } from 'src/app/store/selectors/user-list-selectors';

@Component({
  selector: 'app-ngrx-example',
  templateUrl: './ngrx-example.component.html',
  styleUrls: ['./ngrx-example.component.sass']
})
export class NgrxExampleComponent implements OnInit {
  users$: Observable<string[]>;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.users$ = this.store.select(selectUsersList);
  }

  addNewUser(name: HTMLInputElement) {
    this.store.dispatch(new GenericAction<string>(USER_ACTIONS.ADD_USER, name.value));
    name.value = '';
  }
}
