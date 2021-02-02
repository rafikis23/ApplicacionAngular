import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { Graph1Component } from './pages/graph1/graph1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'progress', component: ProgressComponent},
      { path: 'graph1', component: Graph1Component},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NoPageFoundComponent}

];
// export const routes = RouterModule.forRoot( AppRoutingModule, {useHash: true});
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
