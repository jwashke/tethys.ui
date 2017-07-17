import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent }  from './signin/';
import { SignoutComponent } from './signout/';
import { FeedComponent }    from './feed/';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  { path: 'feed', component: FeedComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
