import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/';
import { SignoutComponent } from './signout/';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
