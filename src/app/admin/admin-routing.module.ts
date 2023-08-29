import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { PageManagerComponent } from './page-manager/page-manager.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'content-manager',
      component: PageManagerComponent
    }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
