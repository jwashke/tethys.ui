import { NgModule, ModuleWithProviders } from '@angular/core';
import { AuthService } from './auth.service';
import { LocalStorageModule } from 'angular-2-local-storage';

@NgModule({
  imports: [
    LocalStorageModule.withConfig({
      prefix: 'tethys',
      storageType: 'localStorage'
    })
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService]
    };
  }
}
