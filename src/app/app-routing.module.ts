import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/_helpers/auth.guard';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'test',
    loadChildren: ()=> import('./features/test/test.module').then(m => m.TestModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
