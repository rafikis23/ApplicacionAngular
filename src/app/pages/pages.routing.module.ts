import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { Graph1Component } from './graph1/graph1.component';
import { ProgressComponent } from './progress/progress.component';
// import { PagesRoutingModule } from './pages.routing.module';

const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'progress', component: ProgressComponent},
        { path: 'graph1', component: Graph1Component},
        { path: '', redirectTo: '/home', pathMatch: 'full'}
      ]
}];
@NgModule({
    imports: [
        RouterModule.forChild( pagesRoutes )
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

