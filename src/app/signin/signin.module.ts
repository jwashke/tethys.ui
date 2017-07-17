import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent, SigninService } from './';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [ FormsModule ],
  providers: [ SigninService ],
})
export class SignInModule { }
