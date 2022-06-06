import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceStoreExampleComponent } from './service-store-example/service-store-example.component';
import { userListReducer } from './store/reducers/user-list-reducer';
import { NgrxExampleComponent } from './components/ngrx-example/ngrx-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceStoreExampleComponent,
    NgrxExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ users: userListReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
