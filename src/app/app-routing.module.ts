import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent }  from './signin/';
import { SignoutComponent } from './signout/';
import { FeedComponent }    from './feed/';
import { HomeComponent }    from './home/home.component';

import { SignedOutGuard } from './guards/';
import { SignedInGuard }  from './guards/';

const routes: Routes = [
  { path: 'signin', component: SigninComponent, canActivate: [SignedOutGuard] },
  { path: 'signout', component: SignoutComponent },
  { path: 'feed', component: FeedComponent, canActivate: [ SignedInGuard ] },
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ SignedOutGuard, SignedInGuard ],
})
export class AppRoutingModule { }
