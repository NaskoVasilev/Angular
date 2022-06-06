import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ServiceStoreExampleComponent } from './service-store-example/service-store-example.component';

const routes: Routes = [
  { path: 'service-store', component: ServiceStoreExampleComponent },
  { path: '', redirectTo: '/service-store', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
