import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './auth.service';

@NgModule({})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }
}
