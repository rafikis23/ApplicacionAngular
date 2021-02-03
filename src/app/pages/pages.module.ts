import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule} from './pages.routing.module';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ProgressComponent,
    Graph1Component
 ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  exports: [
    PagesComponent,
    HomeComponent,
    ProgressComponent,
    Graph1Component
  ]
})
export class PagesModule { }
