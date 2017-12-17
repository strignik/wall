import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { MaterialModule } from '../material.module';
import { LogoutComponent } from './logout.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent
  }, {
    path: 'logout',
    component: LogoutComponent
  }
])

@NgModule({
  imports: [
    authRouting,
    CommonModule,
    MaterialModule
  ],
  exports: [],
  providers: [
    AuthService
  ],
  declarations: [AuthComponent, LogoutComponent]
})

export class AuthModule { }
