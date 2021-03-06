import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';

import { HomeModule }    from './home/home.module';
import { SignInModule }  from './signin/signin.module';
import { SignoutModule } from './signout/signout.module';
import { FeedModule }    from './feed/feed.module';
import { SharedModule }  from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SignInModule,
    SignoutModule,
    FeedModule,
    FormsModule,
    HttpModule,
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
